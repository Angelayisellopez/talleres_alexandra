class Vehiculo{
    constructor(marca){
        this._marca = marca;
    }
    arrancar(){
        console.log("El vehículo ha arrancado")
    }
}
let carrito = new Vehiculo('toyota');
carrito.arrancar();

class coche extends Vehiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo
    }
    mostrarinfo(){
        console.log('la marca es:'+this._marca+"el modelo es:"+this.modelo)
    }
}
let cochecito = new coche ('Ford ', ' Mustang')
cochecito.mostrarinfo();