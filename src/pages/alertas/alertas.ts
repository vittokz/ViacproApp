import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { AlertasDiaPage } from '../alertas-dia/alertas-dia';
import { AlertasSinVencerPage } from '../alertas-sin-vencer/alertas-sin-vencer';
import { AlertasVencidasPage } from '../alertas-vencidas/alertas-vencidas';


@IonicPage()
@Component({
  selector: 'page-alertas',
  templateUrl: 'alertas.html',
})
export class AlertasPage {
  idenRecibida: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.data;
  }
  
  irMenu(){
    this.navCtrl.push(MenuPage,this.idenRecibida);
   }

   exit(){
    let alert = this.alert.create({
      title: 'Viacpro',
      message: 'Seguro desea salir de la App?',
      buttons: [{
        text: "Salir?",
        handler: () => { this.exitApp() }
      }, {
        text: "Cancelar",
        role: 'cancel'
      }]
    })
    alert.present();
}

  exitApp(){
    this.platform.exitApp();
 }

  irAlertasDia(){
    this.navCtrl.push(AlertasDiaPage,this.idenRecibida);

  }
  irAlertasSinVencer(){
    this.navCtrl.push(AlertasSinVencerPage,this.idenRecibida);
  }
  irAlertasVencidas(){
    this.navCtrl.push(AlertasVencidasPage,this.idenRecibida);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertasPage');
  }

}
