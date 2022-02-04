
(() => { // To prevent already declared var error when compile js in the same location

  const prom1 = new Promise((resolve, reject) => {
    console.log("Init");
    setTimeout(() => {
      //resolve("Resolve timeout!!");
      reject("Reject timeout!!");
    }, 1000);
  });

  console.log("End");

  prom1
    .then((message) => console.log(message))
    .catch(err => console.error(err));


})();
