import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AtencionPage } from '../atencion/atencion';
import { ProcesosPage } from '../procesos/procesos';
import { JuzgadosPage } from '../juzgados/juzgados';
import { AlertasPage } from '../alertas/alertas';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  idenRecibida: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.data; 
    this.platform = platform;   
  }

  irPerfil(){
    this.navCtrl.push(PerfilPage,this.idenRecibida);
  }
 
  irProcesos(){
    this.navCtrl.push(ProcesosPage,this.idenRecibida);
  }

  irSoporte(){
    this.navCtrl.push(AtencionPage,this.idenRecibida);
  }

  llamar(){
    
  }

  irJuzgados(){
    this.navCtrl.push(JuzgadosPage,this.idenRecibida);
  }

  irAlertas(){
    this.navCtrl.push(AlertasPage,this.idenRecibida);
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
