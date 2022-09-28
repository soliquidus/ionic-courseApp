import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPage} from './authentification/login/login.page';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class CoreModule { }
