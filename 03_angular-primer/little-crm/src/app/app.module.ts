import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartPageComponent,
    CustomersPageComponent,
    ImprintPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
