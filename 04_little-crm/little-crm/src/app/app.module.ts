import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

import { PageTemplateSyntaxComponent } from './components/page-template-syntax/page-template-syntax.component';
import { PageCustomersListComponent } from './components/page-customers-list/page-customers-list.component';
import {PageStartComponent} from './components/page-start/page-start.component';
import { PageDefaultComponent } from './components/page-default/page-default.component';
import { NavigationMainComponent } from './components/navigation-main/navigation-main.component';

import { registerLocaleData } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { PageCustomerEditComponent } from './components/page-customer-edit/page-customer-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

// Sprachanpassungen für die Formatierung
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de-DE');

import localeCH from '@angular/common/locales/de-CH';
registerLocaleData(localeCH, 'de-CH');

@NgModule({
  declarations: [
    AppComponent,
    // Allgemeine Komponenten
    NavigationMainComponent,

    // Seiten
    PageStartComponent,
    PageTemplateSyntaxComponent,
    PageCustomersListComponent,
    PageDefaultComponent,
    PageCustomerEditComponent
  ],
  imports: [
    HttpClientModule, // Für REST
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
