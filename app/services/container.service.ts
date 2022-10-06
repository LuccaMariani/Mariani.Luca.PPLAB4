import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Container } from '../clases/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  ruta = 'containers';

  constructor(private firestore: AngularFirestore) {

  }

  getContaineres() {
    let collection = this.firestore.collection<any>(this.ruta)
    return collection.valueChanges();
  }

  obtenerTodos(nombreColeccion: string) {
    let collection = this.firestore.collection<any>(nombreColeccion)
    return collection.valueChanges({ idField: 'id' });
  }


  getContainer(key: string) {
    return this.firestore.collection(this.ruta).doc(key).valueChanges();
  }

  guardarContainer(container: Container) {
    console.log(container);
    return this.firestore.collection(this.ruta).add({
      codigo: container.codigo,
      color: container.color,
      empresa: container.empresa,
      capacidad: container.capacidad,
    });
  }
}
