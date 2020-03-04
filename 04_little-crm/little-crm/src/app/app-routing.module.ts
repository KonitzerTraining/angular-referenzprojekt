import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageStartComponent} from './components/page-start/page-start.component';
import {PageTemplateSyntaxComponent} from './components/page-template-syntax/page-template-syntax.component';
import {PageCustomersListComponent} from './components/page-customers-list/page-customers-list.component';
import {PageDefaultComponent} from './components/page-default/page-default.component';
import {PageCustomerEditComponent} from './components/page-customer-edit/page-customer-edit.component';
import {CustomerNewTemplateComponent} from "./components/customer-new-template/customer-new-template.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: PageStartComponent,
  },
  {
    path: 'template',
    component: PageTemplateSyntaxComponent,
  },
  {
    path: 'customers',
    component: PageCustomersListComponent
  },
  {
    path: 'customers/new',
    component: CustomerNewTemplateComponent
  },
  {
    path: 'customers/:id/edit',
    component: PageCustomerEditComponent
  },
  {
    path: '**',
    component: PageDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
