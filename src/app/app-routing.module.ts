import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { PosComponent } from './principal/pos/pos.component';
import { VistaComponent } from './principal/vista/vista.component';
import { LoginComponent } from './principal/login/login.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'pos', component: PosComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
