import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleMunicipioPage } from '../detalle-municipio/detalle-municipio';

@IonicPage()
@Component({
  selector: 'page-busq-municipio',
  templateUrl: 'busq-municipio.html',
})
export class BusqMunicipioPage {

  idenRecibida: any;
  muni: any;
  public municipios : Array<any> = [];
  baseURI='https://www.viacpro.com/ionicConexion/';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.get("parIden"); 
    this.muni = navParams.get("parMunicipio");   
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

   detalleMunicipio(paramIdMuni : any){
    this.navCtrl.push(DetalleMunicipioPage,{parIden :this.idenRecibida, parMunicipio: paramIdMuni});
   }

   load() : void
   {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= {"municipio":this.muni},
    url       : any      	= this.baseURI + "buscarMunicipios.php";
    
    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
          console.dir(data);
          this.municipios = data;
          
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
    console.log('ionViewDidLoad BusqMunicipioPage');
  }

}
