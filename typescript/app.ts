
(() => { // To prevent already declared var error when compile js in the same location

  const add = (a: number, b: number): number => a + b;

  const name = (): string => "Hello JD!";

  const getSalary = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve("Hello Promise!");
    });
  };

})();
