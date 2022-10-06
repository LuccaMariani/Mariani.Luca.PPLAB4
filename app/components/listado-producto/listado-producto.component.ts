import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  @Input() listadoProductos: Producto[] = [];
  @Output() productoSeleccionadoEvento: EventEmitter<any> = new EventEmitter<any>();

  listaProductos: any;
  cantidadProductoes!: Number;

  auxPais!: string;

  constructor(private productoService: ProductoService) {

  }

  ngOnInit(): void {

    //obtener los Productoes
    this.productoService.getProductos().subscribe(dataJson => {
      let listadoProductoesObtenidos = dataJson.map(objProdJson => {
        let ProductoObj = new Producto(
          objProdJson.codigo,
          objProdJson.descripcion,
          objProdJson.precio,
          objProdJson.stock,
          objProdJson.paisOrigen,
          objProdJson.comestible
        );
        return ProductoObj;
      })
      this.listaProductos = listadoProductoesObtenidos;
      this.cantidadProductoes = this.listaProductos.length;
    })

  }

  ver() {
    console.log(this.listaProductos)
  }

  mostrarDetalles(producto: Producto) {
    this.productoSeleccionadoEvento.emit(producto);
  }

}
