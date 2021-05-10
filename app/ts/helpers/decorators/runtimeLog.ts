export function runtimeLog(isSecond: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodBase = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let unit = 'ms';
      let divisor = 1;

      if (isSecond) {
        unit = 's';
        divisor = 1000;
      }

      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
      console.log(`Params: ${propertyKey}: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const value = methodBase.apply(this, args);
      console.log(`Return method: ${propertyKey}: ${JSON.stringify(value)}`);
      const t2 = performance.now();
      console.log(`Method run in ${(t2 - t1) / divisor} ${unit}`);
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
      return value;
    };
    return descriptor;
  };
}
