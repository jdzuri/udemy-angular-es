
(function () { // To prevent already declared var error when compile js in the same location

  const hulk = {
    name: "Hulk",
    smash() {
      setTimeout(() => {

        console.log(`${this.name} smash!!`);
      }, 500);
    }
  };

  hulk.smash();

})();
