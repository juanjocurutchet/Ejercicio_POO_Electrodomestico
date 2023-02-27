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
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramNombre, paramPrecioBase, paramColor, paramConsumoEnergetico, paramPeso) {
        this.nombre = paramNombre;
        this.precioBase = paramPrecioBase;
        this.color = paramColor;
        this.peso = paramPeso;
        this.consumoEnergetico = paramConsumoEnergetico;
    }
    Electrodomestico.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setPrecioBase = function (paramPrecioBase) {
        this.precioBase = paramPrecioBase;
    };
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.setColor = function (paramColor) {
        this.color = paramColor;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.setPeso = function (paramPeso) {
        this.peso = paramPeso;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.setConsumoEnergetico = function (paramConsumoEnergetico) {
        this.consumoEnergetico = paramConsumoEnergetico;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.esBajoConsumo = function () {
        var consumo = false;
        if (this.consumoEnergetico > 100) {
            consumo = false;
        }
        else {
            consumo = true;
        }
        return consumo;
    };
    Electrodomestico.prototype.calcularBalance = function () {
        var balance = this.precioBase / this.peso;
        return balance;
    };
    Electrodomestico.prototype.esDeAltaGama = function () {
        var altaGama = false;
        if (this.calcularBalance() > 3) {
            altaGama = true;
        }
        else {
            altaGama = false;
        }
        return altaGama;
    };
    return Electrodomestico;
}());
var electrodomestico1 = new Electrodomestico("heladera", 60000, 'blanco', 150, 80);
var electrodomestico2 = new Electrodomestico("licuadora", 10000, 'negro', 5, 10);
var electrodomestico3 = new Electrodomestico("cafetera", 15000, 'gris', 8, 5);
// Electrodomestico 1....
console.log(electrodomestico1);
console.log(electrodomestico1.esBajoConsumo()); //nombre de la instancia.funcionalidad para ver la funcionalidad que queramos de la instancia
console.log(electrodomestico1.calcularBalance());
console.log(electrodomestico1.esDeAltaGama());
var Consumo1 = electrodomestico1.getConsumoEnergetico();
console.log(Consumo1);
var precio = electrodomestico1.getPrecioBase();
console.log(precio);
// Electrodomestico 2...
console.log(electrodomestico2);
console.log(electrodomestico2.esBajoConsumo());
console.log(electrodomestico2.calcularBalance());
console.log(electrodomestico1.esDeAltaGama());
var bajoConsumo2 = electrodomestico2.getConsumoEnergetico();
console.log(bajoConsumo2);
var precio2 = electrodomestico2.getPrecioBase();
console.log(precio2);
// Electrodomestico 3...
console.log(electrodomestico3);
console.log(electrodomestico3.color);
console.log(electrodomestico3.peso);
console.log(electrodomestico3.esDeAltaGama());
var color = electrodomestico3.getColor();
console.log(color);
var peso = electrodomestico3.getPeso();
console.log(peso);
var gama = electrodomestico3.getConsumoEnergetico();
