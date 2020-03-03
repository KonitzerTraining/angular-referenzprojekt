import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageStartComponent } from './page-start/page-start.component';
import { PageImprintComponent } from './page-imprint/page-imprint.component';
import { PageCustomersComponent } from './page-customers/page-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageStartComponent,
    PageImprintComponent,
    PageCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
