import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  imports: [
    BrowserModule,
    app_routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ResearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
