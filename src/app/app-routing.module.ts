import { NotFoundComponent } from './not-found/not-found.component';
import { SwimheroComponent } from './swimhero/swimhero.component';
import { SwimbenefitComponent } from './swimbenefit/swimbenefit.component';
import { TypeofComponent } from './typeof/typeof.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"typeof",component:TypeofComponent},
{path:"swimbenefit",component:SwimbenefitComponent},
{path:"swimhero",component:SwimheroComponent},
{path:"notfound",component:NotFoundComponent},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
