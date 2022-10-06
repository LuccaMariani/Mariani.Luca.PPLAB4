import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './page/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './page/bienvenida/bienvenida.component';
import { LoginComponent } from './page/login/login.component';

import { DetalleProductoComponent } from './page/detalle-producto/detalle-producto.component';
import { ListaProductoComponent } from './page/lista-producto/lista-producto.component';
import { GuardianGuard } from './guards/guardian.guard';

const routes: Routes = [


  { path: '', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'altaProducto', component: AltaProductoComponent, canActivate: [GuardianGuard] },
  { path: 'detalleProducto', component: DetalleProductoComponent, canActivate: [GuardianGuard] },

  { path: 'listaProducto', component: ListaProductoComponent },
  { path: '**', component: BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
