class Patcher {
  patchMethod(Cls, methodName, newMethodFactory) {
    // Prevent patch undefined method
    if (Cls.prototype[methodName] === undefined) {
      throw new Error(`Cannot patch ${Cls.name}.prototype.${methodName}`);
    }
    // Prevent newMethodFactory forgets return new method
    const newMethod = newMethodFactory(Cls.prototype[methodName]);
    if (newMethod === undefined) {
      throw new Error(
        `No new method returned from new method factory: ${newMethodFactory}`
      );
    }
    // Old method is saved as __${methodName} method
    // TODO: Save all versions?
    const origMethodKey = `__${methodName}`;
    Cls.prototype[origMethodKey] = Cls.prototype[methodName];
    // Assign new method
    Cls.prototype[methodName] = newMethod;
  }
}

export { Patcher };
