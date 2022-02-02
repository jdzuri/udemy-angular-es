
(function () { // To prevent already declared var error when compile js in the same location

  let message: string = "Hello";
  let quantity: number = 234;
  let isBoolean: boolean = true;
  let date: Date = new Date();
  let anyData: any;

  anyData = message;
  anyData = quantity;

  let spiderman = {
    name: "Peter",
    years: 30
  };

  spiderman = {
    name: "Jose David",
    years: 36
  };
  console.log(message);

})();
