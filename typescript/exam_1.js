"use strict";
(() => {
    // Uso de Let y Const
    const name = 'Jose David Jurado Alonso';
    const age = 36;
    const CHARACTER = { name, age };
    const batman = {
        name: 'Bruno Díaz',
        martialArts: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    const multiplyByTwo = (a, b) => {
        return (a + b) * 2;
    };
    // Función con parametros obligatorios, opcionales y por defecto
    // donde name = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (name, power, weapon = 'arc') => {
        let message;
        if (power) {
            message = `${name}  have the "${power}" power and the ${weapon} weapon`;
        }
        else {
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
        constructor(base, height) {
            this.base = base;
            this.height = height;
            this.getArea = () => this.base * this.height;
        }
    }
})();
