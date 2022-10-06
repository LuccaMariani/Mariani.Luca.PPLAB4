export class Producto {
    public código: number;
    public descripción: string;
    public precio: number;
    public stock: number;
    public paisOrigen: any;
    public comestible: boolean;

    //producto ,(código, descripción , precio , stock, país de origen,comestible (true o false)).

    constructor(código: number = 0, descripción: string = ' ', precio: number = 0, stock: number = 0, paisOrigen: any = 'Mexico', comestible: boolean = false) {

        this.código = código;
        this.descripción = descripción;
        this.precio = precio;
        this.stock = stock;
        this.paisOrigen = paisOrigen;
        this.comestible = comestible;
    }
}