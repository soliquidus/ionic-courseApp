import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from './authentification/login/login.page';
import {AuthentificationGuard} from './authentification/services/authentification.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPage},
  {
    path: 'course', loadChildren: () => import('./pages/course/course.module')
      .then(m => m.CoursePageModule),
    canActivate: [AuthentificationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
