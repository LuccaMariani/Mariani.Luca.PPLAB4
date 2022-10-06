export class Container {

    public codigo: number;
    public color: string;
    public empresa: string;
    public capacidad: number;   

    //tiene código , color , empresa y capacidad(cantidad de unidades).
    constructor(codigo: number = 0, color: string = 'Color', empresa: string = ' ', capacidad: number = 0) {
        this.codigo = codigo;
        this.color = color;
        this.empresa = empresa;
        this.capacidad = capacidad;
  }
}
