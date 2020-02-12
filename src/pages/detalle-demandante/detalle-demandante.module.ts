import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleDemandantePage } from './detalle-demandante';

@NgModule({
  declarations: [
    DetalleDemandantePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleDemandantePage),
  ],
})
export class DetalleDemandantePageModule {}
