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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Sprachanpassungen für die Formatierung
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de-DE');

import localeCH from '@angular/common/locales/de-CH';
import { CurrencyDePipe } from './pipes/currency-de.pipe';
import { PurchaseWarningDirective } from './directives/purchase-warning.directive';
import { CustomerNewTemplateComponent } from './components/customer-new-template/customer-new-template.component';
import { CustomerNewReactiveComponent } from './components/customer-new-reactive/customer-new-reactive.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CustomerEffects} from './store/effects/customer/customer.effects';
import {UserEffects} from './store/effects/user/user.effects';
import {reducer} from './store/reducers/customer/customer.reducer';
import { WidgetSpinnerComponent } from './components/widget-spinner/widget-spinner.component';

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
    PageCustomerEditComponent,
    CurrencyDePipe,
    CurrencyDePipe,
    PurchaseWarningDirective,
    CustomerNewTemplateComponent,
    CustomerNewReactiveComponent,
    WidgetSpinnerComponent
  ],
  imports: [
    HttpClientModule, // Für REST
    FormsModule, // Template Driven Forms
    ReactiveFormsModule, // Reactive Forms
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({customer: reducer}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CustomerEffects, UserEffects]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
