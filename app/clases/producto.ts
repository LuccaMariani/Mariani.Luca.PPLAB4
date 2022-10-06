export class Producto {
    public codigo: number;
    public descripcion: string;
    public precio: number;
    public stock: number;
    public paisOrigen: any;
    public comestible: boolean;

    //producto ,(código, descripción , precio , stock, país de origen,comestible (true o false)).

    constructor(codigo: number = 0, descripcion: string = 'error', precio: number = 0, stock: number = 0, paisOrigen: any = 'Mexico', comestible: boolean = false) {

        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.paisOrigen = paisOrigen;
        this.comestible = comestible;
    }
}