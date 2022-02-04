
(() => { // To prevent already declared var error when compile js in the same location

  interface Xmen {
    name: string;
    age: number;
    power?: string;
  }

  const sendToMission = (xmen: Xmen) => {

  };

  const wolverine: Xmen = {
    name: "Logan",
    age: 60
  };

  sendToMission(wolverine);

})();
