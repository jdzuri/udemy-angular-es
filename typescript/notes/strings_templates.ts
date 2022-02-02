
(function () { // To prevent already declared var error when compile js in the same location

  const name = "Jose David";
  const age = 37;

  const getRandom = () => Math.random();

  const output = `I am ${name} (${age})`;
  const output_newline = `
    I am
    ${name}
    (${age + 10})`;

  const output_random = `I am ${name} (${getRandom()})`;

  console.log(output);
  console.log(output_newline);
  console.log(output_random);
})();
