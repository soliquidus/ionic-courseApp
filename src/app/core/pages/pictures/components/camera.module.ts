import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera/camera.page';
import { GalleryPage } from './gallery/gallery.page';

@NgModule({

  declarations: [
    CameraPage,
    GalleryPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],


})
export class CameraPageModule { }
