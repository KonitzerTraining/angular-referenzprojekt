import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerDashboardComponent} from './components/customer-dashboard/customer-dashboard.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerDashboardComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFeatureRoutingModule { }
