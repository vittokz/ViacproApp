import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertasVencidasPage } from './alertas-vencidas';

@NgModule({
  declarations: [
    AlertasVencidasPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertasVencidasPage),
  ],
})
export class AlertasVencidasPageModule {}
