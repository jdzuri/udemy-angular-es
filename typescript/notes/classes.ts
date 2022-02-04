
(() => { // To prevent already declared var error when compile js in the same location

  // class Avenger {

  //   nick: string;
  //   team: string = "Avengers";
  //   name: string;

  //   canFight: boolean = true;
  //   victories: number;

  //   constructor(nick: string, team: string) {
  //     this.nick = nick;
  //     this.team = team;
  //   }

  // }

  class Avenger {

    constructor(
      public nick: string,
      public team: string,
      public name?: string,
      public victories: number = 0,
      public canFight: boolean = true) {

    }

  }

  const antman = new Avenger("Antman", "Avengers", "Scott");

  console.table(antman);

})();
