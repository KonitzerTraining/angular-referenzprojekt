import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageStartComponent} from "./page-start/page-start.component";
import {PageCustomersComponent} from "./page-customers/page-customers.component";
import {PageImprintComponent} from "./page-imprint/page-imprint.component";


const routes: Routes = [

        {
           path: '',
           redirectTo: '/start',
           pathMatch: 'full'
        },
        {
            path: 'start',
            component: PageStartComponent
        },
        {
            path: 'customers',
            component: PageCustomersComponent
        },
        {
            path: 'imprint',
            component: PageImprintComponent
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
