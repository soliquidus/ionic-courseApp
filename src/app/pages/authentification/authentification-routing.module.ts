import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthentificationPage} from './authentification.page';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationPage,
    children: [
      {
        path: 'connection',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationPageRoutingModule {
}
