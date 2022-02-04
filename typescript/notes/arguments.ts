
(function () { // To prevent already declared var error when compile js in the same location

  const enable = (name: string, moment?: string, object: string = "ron bottle") => {
    return `${name.toUpperCase()}, ${moment ? moment : "at night"}, ${object}`;
  };

  const str = enable("Jose David");
  const str2 = enable("Jose David", "now");

  console.log(str);
  console.log(str2);

})();
