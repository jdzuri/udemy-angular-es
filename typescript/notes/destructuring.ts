
(() => { // To prevent already declared var error when compile js in the same location

  const avenger = {
    name: "Steve",
    nick: "Captain America",
    power: "Shield"
  };

  const { nick, power } = avenger;

  console.table(avenger);
  console.log(`${nick}, ${power}`);

  const destructuring = ({ nick, power }: any) => {
    console.log(`${nick}, ${power}`);
  };


  destructuring(avenger);

  console.log("");

  const avengers: string[] = ["Thor", "Ironman", "Batman"];

  console.table(avengers);

  const [, ironman, batman] = avengers;
  console.log(`${ironman}, ${batman}`);

  const destructuringArray = ([thor, ironman, batman]: string[]) => {
    console.log(`${thor}, ${ironman}, ${batman}`);
  };

  destructuringArray(avengers);


})();
