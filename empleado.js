class empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    obtenerdetalles(){
        console.log('el nombre del empleado es :' + this.nombre+ 'y su salario es:'+this.salario);
    }
}
let empleadito = new empleado ('Angela ', 12000);
empleadito.obtenerdetalles();

class gerente extends empleado{
    constructor(nombre, salario, departamento){
        super(nombre, salario)
        this.departamento = departamento
    }
   obtenerdetalles(){
    console.log('el nombre del empleado es :' + this.nombre+ 'y su salario es:'+this.salario+ 'el departamento es:'+this.departamento);

   }
}   
let nuevo = new gerente ('Angela ', 120000, 'cauca' ) ;
nuevo.obtenerdetalles();    