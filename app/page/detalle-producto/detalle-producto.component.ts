import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  token: any;
  productoSeleccionado!: Producto;
  seleccionado:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tomarProducto(producto: any)
  {
    this.productoSeleccionado=producto;
    this.seleccionado=true;
    console.log('producto: '+this.productoSeleccionado)+', Seleccionado: '+this.seleccionado;
  }
}
