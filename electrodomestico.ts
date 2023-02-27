/** 1) Crear la clase Electrodomestico con las siguientes caracteristicas: nombre, precio base, color, consumo energetico y peso
La funcionalidad de la clase debe ser:
-Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
-Comprobar si el electrodomestico es de bajo consumo (valor booleano) --> Ayuda: comparen el consumoEnergetico contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO
-Calcular el balance (costo dividido peso) --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
-Indicar si es un producto de alta gama(balance mayor que 3). Ayuda --> calculen el balance y luego hacen  if balance > 3 --> funcion con retorno booleno/funcion void con console.log 

2)A la clase Electrodomestico en la que venian trabajando, completarla con:
-Constructor que reciba los parametros necesarios para incializar los atributos de la clase al momento de instanciarla
-Todos los metodos get y set
Crear diferentes instancias del electrodomestico, e interactuar con estas instancias
(Ejemplo: consultarle el valor de un atributo utilizando get y mostrarlo por consola)
*/

class Electrodomestico {

    public nombre: string;
    public precioBase: number;
    public color: string ;
    public consumoEnergetico: number;
    public peso: number;
    

    constructor(paramNombre:string,paramPrecioBase:number,paramColor:string, paramConsumoEnergetico:number, paramPeso:number){

        this.nombre =paramNombre
        this.precioBase=paramPrecioBase
        this.color=paramColor
        this.peso=paramPeso
        this.consumoEnergetico=paramConsumoEnergetico
        
    }

    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }
    public getNombre():string{
        return this.nombre;
    }

    public setPrecioBase(paramPrecioBase:number):void{
        this.precioBase = paramPrecioBase;
    }
    public getPrecioBase():number{
        return this.precioBase;
    }

    public setColor(paramColor:string):void{
        this.color = paramColor;
    }
    public getColor():string{
        return this.color;
    }

    public setPeso(paramPeso:number):void{
        this.peso = paramPeso;
    }
    public getPeso():number{
        return this.peso;
    }

    public setConsumoEnergetico(paramConsumoEnergetico:number):void{
        this.consumoEnergetico = paramConsumoEnergetico;
    }
    public getConsumoEnergetico():number{
        return this.consumoEnergetico;
    }



    public esBajoConsumo(): boolean {

        let consumo:boolean= false;

        if ( this.consumoEnergetico > 100) {
         consumo= false;
        } else {
         consumo= true;
        }
        return consumo
    }

    public calcularBalance(): number {

        let balance:number=this.precioBase/this.peso

        return balance;
    }

    public esDeAltaGama(): boolean {

        let altaGama:boolean=false;

        if (this.calcularBalance() > 3) {

            altaGama=true
        }else{
            altaGama=false
        }
        return altaGama
        
    }

}

let electrodomestico1:Electrodomestico = new Electrodomestico("heladera",60000,'blanco',150,80)

let electrodomestico2:Electrodomestico = new Electrodomestico("licuadora",10000,'negro',5,10)

let electrodomestico3:Electrodomestico = new Electrodomestico("cafetera",15000,'gris',8,5)

// Electrodomestico 1....

console.log(electrodomestico1);

console.log(electrodomestico1.esBajoConsumo()); //nombre de la instancia.funcionalidad para ver la funcionalidad que queramos de la instancia
console.log(electrodomestico1.calcularBalance());
console.log(electrodomestico1.esDeAltaGama());

let Consumo1:number = electrodomestico1.getConsumoEnergetico()
console.log(Consumo1);

let precio:number = electrodomestico1.getPrecioBase()
console.log(precio);

// Electrodomestico 2...

console.log(electrodomestico2);

console.log(electrodomestico2.esBajoConsumo());
console.log(electrodomestico2.calcularBalance());
console.log(electrodomestico1.esDeAltaGama());

let bajoConsumo2:number = electrodomestico2.getConsumoEnergetico()
console.log(bajoConsumo2);

let precio2:number = electrodomestico2.getPrecioBase()
console.log(precio2);

// Electrodomestico 3...

console.log(electrodomestico3);

console.log(electrodomestico3.color);
console.log(electrodomestico3.peso);
console.log(electrodomestico3.esDeAltaGama());

let color:string = electrodomestico3.getColor()
console.log(color);

let peso:number = electrodomestico3.getPeso()
console.log(peso);

let gama:number = electrodomestico3.getConsumoEnergetico()