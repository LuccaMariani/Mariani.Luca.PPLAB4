import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaProductoComponent } from './page/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { DetalleProductoComponent } from './page/detalle-producto/detalle-producto.component';
import { DetallesProductoComponent } from './components/detalles-producto/detalles-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { DetallesProductoPaisComponent } from './components/detalles-producto-pais/detalles-producto-pais.component';
import { ListaProductoComponent } from './page/lista-producto/lista-producto.component';
import { ContainerComponent } from './page/container/container.component';
import { ContainerListadoComponent } from './components/container-listado/container-listado.component';
import { ContainerCrearComponent } from './components/container-crear/container-crear.component';
import { ContainerModificarComponent } from './components/container-modificar/container-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    DetalleProductoComponent,
    DetallesProductoComponent,
    ListadoProductoComponent,
    DetallesProductoPaisComponent,
    ListaProductoComponent,
    ContainerComponent,
    ContainerListadoComponent,
    ContainerCrearComponent,
    ContainerModificarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
