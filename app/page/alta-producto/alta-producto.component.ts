import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { ApisService } from 'src/app/services/apis.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {



  public productoForm!: FormGroup;
  paisOrigen: string='';
  pais?: Pais;
  nombrePais: any;
  //Producto = new Producto();

  constructor(private fb:FormBuilder,private productoSV: ProductoService,private route: Router,private authService: AuthService, private db: AngularFirestore, private api: ApisService) { }

  ngOnInit(): void {
    this.productoForm = this.initForm();
  }
  
  onSubmit():void{ 
    console.log('Form:'+this.productoForm);
  }

  initForm():FormGroup{
    //declarar las propiedades del form con FormBuilder
    return this.fb.group({
      código:['', [Validators.required,Validators.min(1), Validators.max(100000000)]],
      descripción:['', [Validators.required]],
      precio:['', [Validators.required, Validators.min(1)]],
      stock:['', [Validators.required, Validators.min(0)]],
      comestible:['', [Validators.required]],
      paisOrigen:['', [Validators.required]],
    })
  }

  seleccionarPais(p : any) {
    console.log(p.nombre);
    this.pais = p;
    this.nombrePais = p.nombre;
    this.productoForm.get('paisOrigen')?.setValue(p.nombre);

  }

  crearProducto(){
    if(this.productoForm.valid){
     
      let producto = new Producto(
        this.productoForm.get('código')?.value, 
        this.productoForm.get('descripción')?.value,
        this.productoForm.get('precio')?.value,  
        this.productoForm.get('stock')?.value, 
        this.productoForm.get('paisOrigen')?.value,
        this.productoForm.get('comestible')?.value);
      this.productoSV.guardarProducto(producto).then(resp => {
      });
    }
    else{
    }
  }

}
