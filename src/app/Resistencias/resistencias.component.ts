import { Component } from '@angular/core';
import {FormControl, FormGroup, NumberValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: any[] = [
    { color: 'black', valor: 0 },
    { color: 'brown', valor: 1 },
    { color: 'red', valor: 2 },
    { color: 'orange', valor: 3 },
    { color: 'yellow', valor: 4 },
    { color: 'green', valor: 5 },
    { color: 'blue', valor: 6 },
    { color: 'purple', valor: 7 },
    { color: 'gray', valor: 8 },
    { color: 'white', valor: 9 }
    // Agrega los demás colores y valores al arreglo
  ];

  color1!:string
  color2!:string
  color3!:string
  concatenado!:string
  multiplicador!:number
  tolerancia!:string
  toleranciaValor!:number
  valor!:number
  valorMax!:number
  valorMin!:number


  BuscarValor(color: string): number {
    for (let i = 0; i < this.colores.length; i++) {
      if (this.colores[i].color === color) {
        return this.colores[i].valor;
      }
    }
    return 0;
  }

  Calcular():void{
    this.toleranciaValor = parseFloat(this.tolerancia)
    this.multiplicador = Math.pow(10,this.BuscarValor(this.color3))
    this.concatenado = this.BuscarValor(this.color1).toString() + this.BuscarValor(this.color2).toString()
    this.valor = (Number(this.concatenado)) * this.multiplicador
    this.valorMax = this.valor * (1 + this.toleranciaValor)
    this.valorMin = this.valor * (1 - this.toleranciaValor)
  }

}
