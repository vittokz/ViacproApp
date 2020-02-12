import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleDemandadoPage } from './detalle-demandado';

@NgModule({
  declarations: [
    DetalleDemandadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleDemandadoPage),
  ],
})
export class DetalleDemandadoPageModule {}
