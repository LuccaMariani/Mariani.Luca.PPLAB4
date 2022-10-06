import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data: any;
  public retorno: boolean = false;

  constructor(private authService: AngularFireAuth, private router: Router, private angularfireStore: AngularFirestore) {

  }

  routing(state: any): boolean {
    this.whoIsLoggedIn().subscribe(respuesta => {

      console.log('respeusta', respuesta?.email?.toString());

      switch (respuesta?.email?.toString()) {

        case 'admin@gmail.com':
          this.retorno = true;
          break;

        case 'empleado@gmail.com':
          console.log('entro')

          this.retorno = true;
          break;

      }

    })
    console.log('antes de irse', this.retorno)
    return this.retorno
  }



  public async login(usuario: Usuario) {

    let respuesta = { status: false, error: '' };
    try {
      await this.authService.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(data => {
          if (data.user) {
            respuesta.status = true;
          }
        })
    } catch (error) {
      respuesta.error = `${error}`;
    }
    return respuesta;
  }

  public async register(usuario: Usuario) {
    return this.authService.createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  esAdmin(email: string) {
    return email == 'admin@gmail.com';
  }

  esEmpleado(email: string) {
    return email == 'empleado@gmail.com';
  }

  whoIsLoggedIn() {
    return this.authService.authState;
  }

  logout() {
    this.authService.signOut().then(() => {
      //this.estaAdmin == false;
      this.router.navigate(['/login']);
    })
  }

}

