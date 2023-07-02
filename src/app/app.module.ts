import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosModule } from './Puntos/puntos.module';
import { ResistenciasModule } from './Resistencias/resistencias.module';
import { PizzasComponent } from './pizzas/pizzas.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PuntosModule,
    ResistenciasModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
