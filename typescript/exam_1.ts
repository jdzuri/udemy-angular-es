(() => {

  // Uso de Let y Const
  const name = 'Jose David Jurado Alonso';
  const age = 36;

  const CHARACTER = { name, age };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Batman {
    name: string;
    martialArts: string[];
  }

  const batman: Batman = {
    name: 'Bruno Díaz',
    martialArts: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
  };

  // Convertir esta funcion a una funcion de flecha
  const multiplyByTwo = (a: number, b: number): number => {
    return (a + b) * 2;
  };

  // Función con parametros obligatorios, opcionales y por defecto
  // donde name = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = (name: string, power?: string, weapon: string = 'arc'): string => {
    let message;
    if (power) {
      message = `${name}  have the "${power}" power and the ${weapon} weapon`;
    } else {
      message = `${name} have the ${power} power`;
    }
    return message;
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiAddComponentes:
  //   * base
  //   * height
  // También un método que calcule el área  =  base * height,
  // ese método debe de retornar un numero.
  class Rectangle {

    constructor(public base: number, public height: number) { }

    getArea = (): number => this.base * this.height;
  }


})();
