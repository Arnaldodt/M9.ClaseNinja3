console.log("----------------------------- Parte I");

class ninja{
    nombre
    vida = 100;
    velocidad = 3;
    fuerza = 3;
    
    constructor(nombre){
        this.nombre = nombre;
    }
   
    sayName = function (){
        console.log("El nombre de mi ninja es " + this.nombre);

    };
    showStats = function (){
        console.log("Nombre: " + this.nombre + ", vida: " + this.vida + ", velocidad: " + this.velocidad + ", fuerza: " + this.fuerza + "");
    };
    drinkSake = function (){
        this.vida += 10;
        console.log("Se aumenta la vida en 10: " + this.vida);
    };
}

var ninja1 = new ninja("Hyabusa");
ninja1.sayName();
// -> "El nombre de mi ninja es Hyabusa"
ninja1.showStats();
// -> "Nombre: Hayabusa, vida: 100, velocidad: 3, fuerza: 3"
ninja1.drinkSake();

console.log("----------------------------- Parte II");

class Sensei extends ninja{
    sabiduría = 10;
    constructor(nombre){
        super(nombre);
        this.vida= 200;
        this.velocidad=10;
        this.fuerza=10;
    }
    speakWisdom = function(){
        this.drinkSake();
        console.log("Lo que puede hacer un programador en un mes, dos programadores lo pueden hacer en dos meses");
    }
}

// ejemplo de resultado
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que puede hacer un programador en un mes, dos programadores lo pueden hacer en dos meses".
superSensei.showStats();
// -> "Nombre: máster Splinter, vida: 210, velocidad: 10, fuerza: 10"

