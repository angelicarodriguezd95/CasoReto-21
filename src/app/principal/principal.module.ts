import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { PosComponent } from './pos/pos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    PosComponent,
    BusquedaComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  exports: [
    MenuComponent,
    VistaComponent,
    PosComponent,
    BusquedaComponent,
   
  ]
})
export class PrincipalModule { }
