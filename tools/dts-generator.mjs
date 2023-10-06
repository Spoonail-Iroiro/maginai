import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import fs from 'node:fs';

// 資料
// ESTreeの仕様: https://github.com/estree/estree/blob/master/es5.md

const INPUT_FILE = 'game/game/js/game/union.js';
const OUTPUT_FILE = '@types/generated.d.ts';

function run() {
  const file = fs.readFileSync(INPUT_FILE);
  const ast = acorn.parse(file, { ecmaVersion: 'latest' });
  const globalVariable = collectGlobalVariable(ast);

  // 記述の簡略化のための関数
  const edit = (value, f) => {
    f(value);
  };

  // tGameMainの定義を編集
  edit(globalVariable.tGameMain, (tGameMain) => {
    edit(tGameMain.fields, (fields) => {
      fields.isL.type = 'boolean';
      fields.version.type = 'number';

      // tGameから始まるフィールドの型をまとめて設定
      {
        for (const key in fields) {
          if (key.startsWith('tGame')) {
            fields[key].type = key;
          }
        }
        // 微修正
        fields.tGameJobSlumGenerator.type = 'tGameSlumGenerator';
        fields.tGameMenuShortcut.type = 'tGameShortCut';
      }
    });

    edit(tGameMain.methods.getRandom, (getRandom) => {
      let docs = '';
      docs += '  /**\n';
      docs += '   * 乱数を取得する\n';
      docs += '   * @param min 最小値\n';
      docs += '   * @param max 最大値\n';
      docs += '   */\n';
      getRandom.docs = docs;

      getRandom.params[0].name = 'min';
      getRandom.params[0].type = 'number';
      getRandom.params[1].name = 'max';
      getRandom.params[1].type = 'number';
      getRandom.return.type = 'number';
    });
  });

  let s = '';

  // ファイル先頭のコメント
  s += '// tools/dts-generator.mjsによって生成されたファイルです。\n';
  s += '// このファイルを直接編集しないでください。\n';
  s += '\n';

  // d.tsを生成
  s += generate(globalVariable);

  fs.writeFileSync(OUTPUT_FILE, s);
}

/**
 * グローバル変数かどうかの判定する
 * @param {any[]} ancestors
 * @return {boolean}
 */
function isGlobal(ancestors) {
  return ancestors.every((ancestor) => {
    return (
      ancestor.type !== 'FunctionDeclaration' &&
      ancestor.type !== 'FunctionExpression'
    );
  });
}

/**
 * スコープとなるノードを取得する
 * @param {any[]} ancestors
 * @return {any} ノード
 */
function getScope(ancestors) {
  return [...ancestors].reverse().find((ancestor) => {
    return (
      ancestor.type === 'Program' ||
      ancestor.type === 'FunctionDeclaration' ||
      ancestor.type === 'FunctionExpression'
    );
  });
}

/**
 * グローバル変数を収集する
 * @param {any} ast
 * @return {object}
 */
function collectGlobalVariable(ast) {
  const globalVariable = {};

  walk.ancestor(ast, {
    VariableDeclarator(node, _state, ancestors) {
      if (!isGlobal(ancestors)) return;
      if (node.init === null) return;
      if (node.init.type !== 'FunctionExpression') return;

      const name = node.id.name;
      const docs = '';
      const fields = collectFields(node);
      const methods = {};

      globalVariable[name] = {
        name,
        docs,
        fields,
        methods,
      };
    },
    AssignmentExpression(node, _state, ancestors) {
      if (!isGlobal(ancestors)) return;
      if (node.left.type !== 'MemberExpression') return;
      if (node.left.property.name !== 'prototype') return;
      if (node.right.type !== 'ObjectExpression') return;

      const methods = collectMethods(node);

      const variable = globalVariable[node.left.object.name];
      if (variable) variable.methods = methods;
    },
  });

  return globalVariable;
}

/**
 * フィールドを収集する
 * @param {any} node
 * @return {object}
 */
function collectFields(node) {
  const fields = {};

  walk.ancestor(node.init, {
    AssignmentExpression(expr, _state, ancestors) {
      const scope = getScope(ancestors);
      if (scope !== node.init) return;
      if (expr.left.type !== 'MemberExpression') return;
      if (expr.left.object.type !== 'ThisExpression') return;
      if (expr.left.property.type !== 'Identifier') return;

      const name = expr.left.property.name;
      const docs = '';
      const type = 'any';

      fields[name] = {
        name,
        docs,
        type,
      };
    },
  });

  return fields;
}

/**
 * メソッドを収集する
 * @param {any} node
 * @return {object}
 */
function collectMethods(node) {
  const methods = {};

  for (const prop of node.right.properties) {
    if (prop.type !== 'Property') continue;
    if (prop.key.type !== 'Identifier' && prop.key.type !== 'Literal') continue;
    if (prop.value.type !== 'FunctionExpression') continue;

    let name = '';
    const docs = '';
    const params = [];
    let ret = {
      type: 'void',
    };

    if (prop.key.type === 'Identifier') {
      name = prop.key.name;
    } else if (prop.key.type === 'Literal') {
      name = prop.key.value;
    }

    for (const param of prop.value.params) {
      if (param.type !== 'Identifier') continue;

      params.push({
        name: param.name,
        type: 'any',
      });
    }

    walk.ancestor(prop.value, {
      ReturnStatement(node, _state, ancestors) {
        const scope = getScope(ancestors);
        if (scope !== prop.value) return;

        if (node.argument !== null) {
          ret.type = 'any';
        }
      },
    });

    methods[name] = {
      name,
      docs,
      params,
      return: ret,
    };
  }

  return methods;
}

/**
 * d.tsを生成する
 * @param {object} globalVariable
 * @return {string}
 */
function generate(globalVariable) {
  let s = '';

  for (const variable of Object.values(globalVariable)) {
    if (
      Object.entries(variable.fields).length === 0 &&
      Object.entries(variable.methods).length === 0
    ) {
      continue;
    }

    if (variable.docs) s += variable.docs;
    s += `declare class ${variable.name} {\n`;

    for (const field of Object.values(variable.fields)) {
      if (field.docs) s += field.docs;
      s += `  ${field.name}: ${field.type};\n`;
    }

    for (const method of Object.values(variable.methods)) {
      if (method.docs) s += method.docs;
      s += `  ${method.name}(`;
      for (const param of method.params) {
        s += `${param.name}: ${param.type}`;
        if (param !== method.params[method.params.length - 1]) s += ', ';
      }
      s += `): ${method.return.type};\n`;
    }

    s += '}\n';
    s += '\n';
  }

  // 最後の余分な改行を削除
  s = s.slice(0, -1);

  return s;
}

run();
