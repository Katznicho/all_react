import { CountryComponent } from './components/country/country.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"" ,component:HomeComponent
  },
  {
  path:"countries" , component:CountryComponent , pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
