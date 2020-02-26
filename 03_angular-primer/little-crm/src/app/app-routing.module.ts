import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {ImprintPageComponent} from "./imprint-page/imprint-page.component";
import {CustomersPageComponent} from "./customers-page/customers-page.component";


const routes: Routes = [
    {
       path: '',
       redirectTo: '/start',
       pathMatch: 'full'
    },
    {
        path: 'start',
        component: StartPageComponent
    },
    {
        path: 'customers',
        component: CustomersPageComponent
    },
    {
        path: 'imprint',
        component: ImprintPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
