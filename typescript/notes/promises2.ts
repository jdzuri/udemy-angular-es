
(() => { // To prevent already declared var error when compile js in the same location

  const getMoney = (quantity: number) => {
    let currentMoney = 1000;

    return new Promise<number>((resolve, reject) => {
      if (quantity < currentMoney) {
        currentMoney -= quantity;
        resolve(currentMoney);
      } else {
        reject("There are not enough funds");
      }

    });

  };

  const extractMoney = (quantity: number) => {
    getMoney(quantity)
      .then(currentMoney => console.log(`Founds available: ${currentMoney}`))
      .catch(err => console.error(err));
  };

  extractMoney(300);
  extractMoney(1200);


})();
