import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { PageTemplateSyntaxComponent } from './components/page-template-syntax/page-template-syntax.component';
import { PageCustomersListComponent } from './components/page-customers-list/page-customers-list.component';
import {PageStartComponent} from './components/page-start/page-start.component';
import { PageDefaultComponent } from './components/page-default/page-default.component';

@NgModule({
  declarations: [
    AppComponent,
    PageStartComponent,
    PageTemplateSyntaxComponent,
    PageCustomersListComponent,
    PageDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
