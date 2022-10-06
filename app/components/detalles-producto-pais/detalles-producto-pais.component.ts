import { Component, Input, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalles-producto-pais',
  templateUrl: './detalles-producto-pais.component.html',
  styleUrls: ['./detalles-producto-pais.component.css']
})
export class DetallesProductoPaisComponent implements OnInit {

  @Input() productoSeleccionadoRecibido : Producto = new Producto();

  nombre!:string;
  capital!:string;
  poblacion!:number;
  bandera!:any; 
  nombreNativo!:string;

  constructor(private apiService: ApisService) { }

  ngOnInit(){
  }

  ngOnChanges(): void {
    //console.log("nombre pais:");
    //console.log(this.ProductoSeleccionadoRecibido?.paisOrigen);
    this.apiService.ObtenerPaisPorNombre(this.productoSeleccionadoRecibido?.paisOrigen).subscribe((pais: any) => {
        this.nombre = pais[0].name.common;
        this.bandera = pais[0].flags.png;
        this.capital=pais[0].capital;
        this.poblacion=pais[0].population;
        this.nombreNativo=pais[0].name.official;
    });

  }

  ver() {
    console.log(this.productoSeleccionadoRecibido?.paisOrigen);
  }


}
