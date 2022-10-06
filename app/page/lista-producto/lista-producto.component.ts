import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  listaProductos: any;
  cantidadProductoes!: Number;

  auxPais!: string;

  constructor(private productoService: ProductoService) {

  }

  ngOnInit(): void {

    //obtener los Productos
    this.productoService.getProductos().subscribe(dataJson => {
      let listadoProductoesObtenidos: any[] = [];

      
      dataJson.forEach(producto => {
        //filtro productos sin stock
        if (producto.stock > 0) {
          listadoProductoesObtenidos.push(
            new Producto(
              producto.codigo,
              producto.descripcion,
              producto.precio,
              producto.stock,
              producto.paisOrigen,
              producto.comestible
            )
          )
        }
      });

    this.listaProductos = listadoProductoesObtenidos;
    this.cantidadProductoes = this.listaProductos.length;
  })

}

ver() {
  console.log(this.listaProductos)
}

}
