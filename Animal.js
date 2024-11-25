//padre
class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido(){
       console.log("el animal hace sonido");
    }
}
let animal = new Animal ("perro", 2);
animal.hacerSonido();
//hijo
class Perro extends Animal {
    constructor(nombre, edad, raza){
        super(nombre, edad)
        this.raza = raza
    }
    hacerSonido() {  
        console.log(this.nombre + " hace: ¡guau!");
    }
}

const animalito = new Perro('perro', 2);
animalito.hacerSonido(); 
    


 

 