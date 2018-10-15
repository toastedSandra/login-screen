import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { ResetComponent } from '../reset/reset.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
      path: 'reset',
      component: ResetComponent,
    },
    {
      path: 'confirmation',
      component: ConfirmationComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
