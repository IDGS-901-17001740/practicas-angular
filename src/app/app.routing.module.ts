import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PuntosComponent } from "./Puntos/puntos.component";
import { ResistenciasComponent } from "./Resistencias/resistencias.component";
import { PizzasComponent } from "./pizzas/pizzas.component";
import { HomeComponent } from "./home/home.component";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";


const routes: Routes=[
  {path:'', redirectTo: '/home',pathMatch: 'full'},
  {path:'PuntosComponent', component: PuntosComponent},
  {path:'ResistenciasComponent', component: ResistenciasComponent},
  {path:'PizzasComponent', component: PizzasComponent},
  {path:'CinepolisComponent', component: CinepolisComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
