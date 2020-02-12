import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleDepartPage } from './detalle-depart';

@NgModule({
  declarations: [
    DetalleDepartPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleDepartPage),
  ],
})
export class DetalleDepartPageModule {}
