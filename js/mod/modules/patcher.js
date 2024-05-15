import { closest, distance } from 'fastest-levenshtein';

/**
 * `maginai.patcher`サブモジュールクラス
 * 直接インスタンス化せず`maginai.patcher`から使用してください
 *
 * `patchMethod`メソッドでメソッドを新しいメソッドでモンキーパッチすることが可能
 * （詳細は`patchMethod`ドキュメントへ）
 */
class Patcher {
  /**
   * 指定したクラスのメソッドを新しいメソッドに置き換え（パッチ）する
   *
   * ※よりシンプルでミスしにくい新しいインターフェースを持つPatcher2の使用を推奨
   *   詳細はPatcher2定義へ
   *
   * ```js
   * class HelloClass {
   *   a = 1;
   *   hello(){
   *     console.log("Hello", this.a);
   *   }
   * }
   * const helloobj = new HelloClass();
   * maginai.patcher.patchMethod(
   *   HelloClass, // HelloClassの
   *   "hello", // helloメソッドをパッチする
   *   (origMethod) => {
   *   // 新しいhelloメソッドは…
   *   const rtnFn = function (...args) {
   *     // もとのメソッドを呼び出した後に'Bye'というメッセージを出力する
   *     const rtn = origMethod.call(this, ...args);
   *     console.log("Bye");
   *     return rtn;
   *     // もとのメソッドは引数も返り値もないが、互換性のために常にargsをすべて渡し返り値を返している
   *   };
   *   return rtnFn;
   * })
   * // パッチ以降のhelloメソッドの呼び出しは、新しいhelloメソッドを呼ぶ（たとえこのようにすでにインスタンスが作られていても）
   * helloobj.hello()
   * // Hello 1
   * // Bye
   * ```
   * @param {Function} cls パッチ対象クラス
   * @param {string} methodName パッチ対象メソッド名
   * @param {(origMethod: Function) => Function} newMethodFactory 新しい`methodName`メソッドとなる関数を返すファクトリ関数
   *     origMethodは元々の`methodName`メソッド
   */
  patchMethod(cls, methodName, newMethodFactory) {
    // Prevent patch undefined method
    if (cls.prototype[methodName] === undefined) {
      let message = `Cannot patch ${cls.name}.prototype.${methodName}.`;
      // 似た名前のメソッドを提案する
      const methodNames = Object.getOwnPropertyNames(cls.prototype);
      const closestMethod = closest(methodName, methodNames);
      if (closestMethod !== undefined) {
        // n文字違いまでなら提案する
        const n = methodName.length / 2;
        if (distance(methodName, closestMethod) <= n) {
          message += ` Did you mean '${closestMethod}'?`;
        }
      }
      throw new Error(message);
    }
    // Prevent newMethodFactory forgets return new method
    const newMethod = newMethodFactory(cls.prototype[methodName]);
    if (newMethod === undefined) {
      throw new Error(
        `No new method returned from new method factory: ${newMethodFactory}`
      );
    }
    // Old method is saved as __maginai__${methodName} method
    // TODO: Save all versions?
    const origMethodKey = `__maginai__${methodName}`;
    cls.prototype[origMethodKey] = cls.prototype[methodName];
    // Assign new method
    cls.prototype[methodName] = newMethod;
  }
}

export { Patcher };
