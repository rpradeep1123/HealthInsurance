import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CruiseListComponent } from './components/cruise-list/cruise-list.component';
import { OnlineFormComponent } from './components/online-form/online-form.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'cruise-list', component: CruiseListComponent },
  { path: 'online-form', component: OnlineFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
