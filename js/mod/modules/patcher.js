import { closest, distance } from 'fastest-levenshtein';

/**
 * `maginai.patcher` submodule class
 *
 * Do not instantiate directly; use from `maginai.patcher`.
 *
 * You can patch a method of class with `patchMethod` method
 */
class Patcher {
  /**
   * Patches the specified method `methodName` of the class `cls` with a new method
   *
   * `newMethodFactory` should be a function which returns a new method for `methodName`.
   *
   * \* It's recommended to use `Patcher2`, which is a simpler patcher with a user-friendly interface
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
   *   HelloClass, // Patches the `hello` method of `HelloClass`...
   *   "hello",
   *   (origMethod) => {
   *   // The new `hello` method...
   *   const rtnFn = function (...args) {
   *     // calls the original method and then says 'Bye'
   *     const rtn = origMethod.call(this, ...args);
   *     console.log("Bye");
   *     return rtn;
   *     // The original `hello` definition currently has no args, but we passed args for compatibility.
   *     // For the same reason, it's recommended to return the original value (or you changed) even if the original method currently has no return value.
   *   };
   *   return rtnFn;
   * })
   * // After the patching, even already instanciated objects use the new method
   * helloobj.hello()
   * // Hello 1
   * // Bye
   * ```
   * @param {Function} cls - the class which has the method `methodName`
   * @param {string} methodName - the name of the method to be patched
   * @param {(origMethod: Function) => Function} newMethodFactory - a function which returns a new method for `methodName`
   *     `origMethod` is the original method `methodName`
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
