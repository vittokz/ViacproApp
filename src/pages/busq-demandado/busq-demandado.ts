import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleDemandadoPage } from '../detalle-demandado/detalle-demandado';

@IonicPage()
@Component({
  selector: 'page-busq-demandado',
  templateUrl: 'busq-demandado.html',
})
export class BusqDemandadoPage {
  idenRecibida: any;
  nombre: any;
  baseURI='https://www.viacpro.com/ionicConexion/';
  public listaDemandado : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.nombre = navParams.get("parNombre");
    this.idenRecibida = navParams.get("parIden");   
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
  
  irMenu(){
    this.navCtrl.push(MenuPage,this.idenRecibida);
   }

   detalleDemandado(paramRadicado : any){
    this.navCtrl.push(DetalleDemandadoPage,{parIden :this.idenRecibida, radicado: paramRadicado});
   }

   
   load() : void
   {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= {"nombre" : this.nombre,"identidad":this.idenRecibida},
    url       : any      	= this.baseURI + "buscarDemandado.php";

    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
          console.dir(data);
          this.listaDemandado = data;
          
      },
      (error : any) =>
      {
         console.dir(error);
      });
    }
  
    ionViewWillEnter() : void
      {
          this.load();
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusqDemandadoPage');
  }
}
