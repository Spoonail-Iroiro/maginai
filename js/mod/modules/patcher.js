import { closest, distance } from "fastest-levenshtein";

/**
 * `maginai.patcher`サブモジュールクラス
 * 直接インスタンス化せず`maginai.patcher`から使用してください
 */
class Patcher {
  /**
   * 指定したクラスのメソッドを新しいメソッドに置き換え（パッチ）する
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
   *   const rtnFn = function () {
   *     // もとのメソッドを呼び出した後に'Bye'というメッセージを出力する
   *     origMethod.call(this);
   *     console.log("Bye");
   *   };
   *   return rtnFn;
   * })
   * // パッチ以降はhelloメソッドの呼び出しは、新しいhelloメソッドを呼ぶ
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
      const methodNames = Object.getOwnPropertyNames(cls.prototype);
      const closestMethod = closest(methodName, methodNames);
      throw new Error(`Cannot patch ${cls.name}.prototype.${methodName}. Did you mean '${closestMethod}'?`);
    }
    // Prevent newMethodFactory forgets return new method
    const newMethod = newMethodFactory(cls.prototype[methodName]);
    if (newMethod === undefined) {
      throw new Error(
        `No new method returned from new method factory: ${newMethodFactory}`
      );
    }
    // Old method is saved as __${methodName} method
    // TODO: Save all versions?
    const origMethodKey = `__${methodName}`;
    cls.prototype[origMethodKey] = cls.prototype[methodName];
    // Assign new method
    cls.prototype[methodName] = newMethod;
  }
}

export { Patcher };
