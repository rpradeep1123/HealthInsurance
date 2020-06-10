import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CruiseListComponent } from './cruise-list/cruise-list.component';
import { OnlineFormComponent } from './online-form/online-form.component';


const routes: Routes = [
  { path: 'cruise-list', component: CruiseListComponent },
  { path: 'online-form', component: OnlineFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
