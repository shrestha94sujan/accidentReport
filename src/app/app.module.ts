import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartVisualsComponent } from './chart-visuals/chart-visuals.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartVisualsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
