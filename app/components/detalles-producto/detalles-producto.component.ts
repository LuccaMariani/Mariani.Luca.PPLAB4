import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  @Input() productoSeleccionadoRecibido : Producto= new Producto();

  constructor() { } 

  ngOnInit(): void {
    //console.log('nombre:'+this.productoSeleccionadoRecibido.nombre);
  }

  OnChanges(){
    console.log('codigo:'+this.productoSeleccionadoRecibido.codigo);
  }

  ver() {
    console.log(this.productoSeleccionadoRecibido);
  }
}
