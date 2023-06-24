import { Component } from '@angular/core';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent {
  x1!:number
  x2!:number
  y1!:number
  y2!:number
  resultado!:number

  calcular():void{
    this.resultado = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2))
  }
}
