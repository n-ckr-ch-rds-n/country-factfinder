import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GraphQLModule} from './apollo.config';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { FactWindowComponent } from './fact-window/fact-window.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryListComponent,
    FactWindowComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
