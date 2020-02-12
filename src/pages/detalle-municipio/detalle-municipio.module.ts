import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleMunicipioPage } from './detalle-municipio';

@NgModule({
  declarations: [
    DetalleMunicipioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleMunicipioPage),
  ],
})
export class DetalleMunicipioPageModule {}
