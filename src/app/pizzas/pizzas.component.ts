import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { Pizza } from './pizza';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre!:string
  direccion!:string
  telefono!:string
  pizzaForm!:FormGroup
  pizzas: Pizza[] =[]
  subtotal!:number
  total!:number
  ingredientes!:string
  tamanoSeleccionado!:string
  tam!:string
  tamano =[
  'Chica $40',
  'Mediana $80',
  'Grande $120'
]

constructor(private readonly fb: FormBuilder){
  this.pizzaForm = this.initForm()
}

initForm():FormGroup{
  return this.fb.group({
    nombre:['',[Validators.required]],
    direccion:['',[Validators.required]],
    telefono:['',[Validators.required]],
    tamano:['',[Validators.required]],
    ingrediente:['',[Validators.required]],
    numPizzas:['',[Validators.required]],
    subtotal:[''],
    jamon:['', [Validators.required]],
    pina:['', [Validators.required]],
    champi:['', [Validators.required]],
  })
}

obtenerDatos():void{
  this.tam = ""
  this.ingredientes = ""
  switch(this.pizzaForm.get('tamano')?.value){
    case 'Chica $40':
      this.subtotal = 40
      this.tam = 'Chica'
    break
    case 'Mediana $80':
      this.subtotal = 80
      this.tam = 'Mediana'
    break
    case 'Grande $120':
      this.subtotal = 120
      this.tam = 'Grande'
    break
  }
  if(this.pizzaForm.get('jamon')?.value==true){
    this.subtotal+=10;
    this.ingredientes+="Jamon";
  }
  if(this.pizzaForm.get('pina')?.value==true){
    this.subtotal+=10;
    this.ingredientes+=" Piña";
  }
  if(this.pizzaForm.get('champi')?.value==true){
    this.subtotal+=10;
    this.ingredientes+=" Champiñones";
  }

  console.log(this.ingredientes)
  console.log(this.subtotal)

  this.subtotal=this.subtotal*Number(this.pizzaForm.get('numPizzas')?.value);
    this.pizzas.push({
      nombre: this.pizzaForm.get('nombre')?.value,
      direccion:this.pizzaForm.get('direccion')?.value,
      telefono:this.pizzaForm.get('telefono')?.value,
      tamano:this.tam,
      ingrediente:this.ingredientes,
      numPizzas: this.pizzaForm.get('numPizzas')?.value,
      subtotal:this.subtotal});
}

obtenerTotal():void{
  let total:number = 0
  for(let i = 0; i < this.pizzas.length; i++){
    total += this.pizzas[i].subtotal
  }

  this.total = total;
  console.log(total)
  this.nombre = this.pizzaForm.get('nombre')?.value
  this.direccion = this.pizzaForm.get('direccion')?.value
}

}
