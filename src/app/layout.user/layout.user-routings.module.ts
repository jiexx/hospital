import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CLogin } from './component.login/CPNT.login';

const routes: Routes = [
    {
        path: 'login',
        component: CLogin
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }