import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/services/container.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-container-crear',
  templateUrl: './container-crear.component.html',
  styleUrls: ['./container-crear.component.css']
})
export class ContainerCrearComponent implements OnInit {

  public containerFormGroup!: FormGroup;
  @Output() crearContainerEvento = new EventEmitter<any>();


  constructor(private firebase: ContainerService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.containerFormGroup = this.initForm();
  }

  onSubmit():void{ 
    console.log('Form:'+this.containerFormGroup);
  }

  initForm():FormGroup{
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      codigo:['', [Validators.required]],
      color:['', [Validators.required]],
      empresa:['', [Validators.required]],
      capacidad:['', [Validators.required, Validators.min(500), Validators.max(1000)]],
    })
  }

  crearcontainer() {
    if (this.containerFormGroup.valid) {
      try {

        let elContainer = new Container(
          this.containerFormGroup.get('codigo')?.value,
          this.containerFormGroup.get('color')?.value,
          this.containerFormGroup.get('empresa')?.value,
          this.containerFormGroup.get('capacidad')?.value,);

        this.crearContainerEvento.emit(elContainer);
        console.log('Evento alta container ejecuado correctamente', elContainer);
      }
      catch {
        console.log('Error al ejecutar Evento alta container');
      }
    }
    else {
      console.log('el form no es valido');
    }
  }




}
