import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleDemandantePage } from '../detalle-demandante/detalle-demandante';

@IonicPage()
@Component({
  selector: 'page-detalle-juzgado',
  templateUrl: 'detalle-juzgado.html',
})
export class DetalleJuzgadoPage {
  idenRecibida: any;
  idJuzgado: any;
  baseURI='https://www.viacpro.com/ionicConexion/';
  public listaProcesos : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.get("parIden");
    this.idJuzgado = navParams.get("idJuzgado");   
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
    options 	: any		= {"idJuzgado":this.idJuzgado.idJuz},
    url       : any      	= this.baseURI + "detalleJuzgado.php";

    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
          console.dir(data);
          this.listaProcesos = data;
          
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

  verProcesos(paramRadicado: any){
    this.navCtrl.push(DetalleDemandantePage,{parIden :this.idenRecibida, radicado: paramRadicado});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleJuzgadoPage');
  }

}
