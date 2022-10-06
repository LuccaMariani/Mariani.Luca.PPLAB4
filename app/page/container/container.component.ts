import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  containerSeleccionadaModificar :Container= new Container();
  containerSeleccionadaBorrar :Container= new Container();

  constructor(private firebase: ContainerService) { }

  ngOnInit(): void {
  }

  //recibe el evente del crear Container, y da de alta una
  recibeEventoContainer(container: Container){
    this.firebase.guardarContainer(JSON.parse(JSON.stringify(container))).then(()=>{
      console.log('Guardar Container salio bien');
    }).catch((err: string)=>{
      console.log('Guardar Container salio MAL' + err);
    })
    this.limpiar()
  }

  //recibe la Container seleccionada en el lsitado, para que modificar o borrar lo reciba como input
  
  //Tendria que ser: recibeEventoContainerSeleccionada(Container: Container), pero da error
  recibeEventoContainerSeleccionada(Container: any){
    this.containerSeleccionadaModificar = JSON.parse(JSON.stringify(Container));
    this.containerSeleccionadaBorrar = JSON.parse(JSON.stringify(Container));
  }


  limpiar(){
    this.containerSeleccionadaModificar = new Container()
    this.containerSeleccionadaBorrar = new Container()
  }


}
