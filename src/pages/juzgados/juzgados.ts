import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleJuzgadoPage } from '../detalle-juzgado/detalle-juzgado';

@IonicPage()
@Component({
  selector: 'page-juzgados',
  templateUrl: 'juzgados.html',
})
export class JuzgadosPage {
  idenRecibida: any;
  public items : Array<any> = [];
 
  baseURI='https://www.viacpro.com/ionicConexion/';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.data;
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

   load() : void
     {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
      options 	: any		= {"identidad" : this.idenRecibida},
      url       : any      	= this.baseURI + "buscarJuzgado.php";
  
      this.http.post(url,JSON.stringify(options), headers)
      .subscribe((data : any) =>
        {
           console.dir(data);
           console.log(data);
           this.items = data;
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

   detalleJuzgado(paramIdJuzgado: any){
      this.navCtrl.push(DetalleJuzgadoPage,{parIden :this.idenRecibida, idJuzgado: paramIdJuzgado});
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuzgadosPage');
  }

}
