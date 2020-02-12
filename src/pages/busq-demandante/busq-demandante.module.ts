import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusqDemandantePage } from './busq-demandante';

@NgModule({
  declarations: [
    BusqDemandantePage,
  ],
  imports: [
    IonicPageModule.forChild(BusqDemandantePage),
  ],
})
export class BusqDemandantePageModule {}
