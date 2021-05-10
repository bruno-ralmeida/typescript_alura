export function throttle(ms = 500) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodBase = descriptor.value;
    let timer = 0;
    descriptor.value = function (...args: any[]) {
      if (event) event.preventDefault();
      clearTimeout(timer);
      timer = setTimeout(() => methodBase.apply(this, args), ms);
    };

    return descriptor;
  };
}
