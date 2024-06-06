import { closest, distance } from 'fastest-levenshtein';

/**
 * `maginai.patcher2` submodule class
 *
 * Don't instanciate directly, use from `maginai.patcher2`.
 *
 * You can patch a method of class with `patchMethod` method
 */
export class Patcher2 {
  /**
   * Patches the specified method `methodName` of the class `cls` with `newMethod`
   *
   * The args for `newMethod` is `(self, originalMethod, args)`.
   *
   * ```js
   * class HelloClass {
   *   a = 1;
   *   hello(){
   *     console.log("Hello", this.a);
   *     return this.a;
   *   }
   * }
   * const helloobj = new HelloClass();
   *
   * maginai.patcher2.patchMethod(
   *   HelloClass, // Patches the `hello` method of the `HelloClass`...
   *   "hello",
   *   // The new `hello` method...
   *   (self, originalMethod, args) => {
   *     // Calls the original `hello` and then returns the returned value + 2 and says "Bye"
   *     const rtn = originalMethod(...args) + 2;
   *     console.log("Bye");
   *     return rtn;
   *     // The original `hello` definition currently has no args, but we passed args for compatibility.
   *     // For the same reason, it's recommended to return the original value (or you changed) even if the original method currently has no return value.
   * });
   *
   * // After the patching, even already instanciated objects use the new method
   * console.log(helloobj.hello())
   * // Hello 1
   * // Bye
   * // 3
   * ```
   * @param {Function} cls - The class which has the method `methodName`
   * @param {string} methodName - The name of method to be patched
   * @param {(self: Object, originalMethod: Function, args: any[]) => void} newMethod
   *     `self` is the instance (`this`) on which the method is called.
   *     `originalMethod` is the original method `methodName`, bound to `this`.
   *     `args` is the list of the args passed to the method.
   */
  patchMethod(cls, methodName, newMethod) {
    // Prevent patching undefined method
    if (cls.prototype[methodName] === undefined) {
      let message = `Cannot patch ${cls.name}.prototype.${methodName}.`;
      // Suggest the correct name
      const methodNames = Object.getOwnPropertyNames(cls.prototype);
      const closestMethod = closest(methodName, methodNames);
      if (closestMethod !== undefined) {
        // Difference is allowed up to `n` characters
        const n = methodName.length / 2;
        if (distance(methodName, closestMethod) <= n) {
          message += ` Did you mean '${closestMethod}'?`;
        }
      }
      throw new Error(message);
    }
    // Old method is saved as __maginai__${methodName} method
    // TODO: Save all versions?
    const origMethodKey = `__maginai__${methodName}`;
    const origMethod = cls.prototype[methodName];
    cls.prototype[origMethodKey] = origMethod;
    // Assign new method
    cls.prototype[methodName] = function (...args) {
      const rtn = newMethod(this, origMethod.bind(this), args);
      return rtn;
    };
  }
}
