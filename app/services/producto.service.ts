import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  ruta = 'productos';

  constructor(private firestore: AngularFirestore) {

  }

  getProductos() {
    let collection = this.firestore.collection<any>(this.ruta)
    return collection.valueChanges();
  }

  obtenerTodos(nombreColeccion: string) {
    let collection = this.firestore.collection<any>(nombreColeccion)
    return collection.valueChanges({ idField: 'id' });
  }


  getProducto(key: string) {
    return this.firestore.collection(this.ruta).doc(key).valueChanges();
  }

  guardarProducto(producto: Producto) {
    console.log(producto);
    return this.firestore.collection(this.ruta).add({
      código: producto.código,
      descripción: producto.descripción,
      precio: producto.precio,
      stock: producto.stock,
      paisOrigen: producto.paisOrigen,
      comestible: producto.comestible
    });
  }
}
