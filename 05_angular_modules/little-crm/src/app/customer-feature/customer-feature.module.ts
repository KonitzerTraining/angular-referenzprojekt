import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFeatureRoutingModule } from './customer-feature-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


@NgModule({
  declarations: [CustomerDashboardComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerFeatureRoutingModule
  ]
})
export class CustomerFeatureModule { }
