import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CruiseListComponent } from './cruise-list/cruise-list.component';
import { OnlineFormComponent } from './online-form/online-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CruiseListComponent,
    OnlineFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
