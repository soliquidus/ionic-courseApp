import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './components/camera.page';

@NgModule({

  declarations: [
    CameraPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],


})
export class CameraPageModule { }
