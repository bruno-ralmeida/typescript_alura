export function DOMInject(selector: string) {
  return function (target: any, key: string) {
    let element: JQuery;

    const getter = function () {
      if (!element) {
        console.log(`Search element DOM - ${selector}`);
        element = $(selector);
      }

      return element;
    };

    Object.defineProperty(target, key, {
      get: getter,
    });
  };
}
