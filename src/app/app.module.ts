import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuntosModule } from './Puntos/puntos.module';
import { ResistenciasModule } from './Resistencias/resistencias.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PuntosModule,
    ResistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
