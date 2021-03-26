import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component:HomeComponent },
  { path: "student-list", component: StudentListComponent },
  {path:"student-create", component:StudentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
