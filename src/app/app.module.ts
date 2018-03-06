import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { QplaceComponent }  from './q-place.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, QplaceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
