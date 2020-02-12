import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-busq-radicado',
  templateUrl: 'busq-radicado.html',
})
export class BusqRadicadoPage {
  idenRecibida: any;
  rad: any;
  idProceso: any;
  public proceso : Array<any> = [];
  public actuacionesA : Array<any> = [];
  public archivos : Array<any> = [];
  baseURI='https://www.viacpro.com/ionicConexion/';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    //this.radicado = navParams.data;
    this.idenRecibida = navParams.get("parIden");
    this.rad = navParams.get("parRadicado");
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
  
   alertError() {
    let alert = this.alert.create({
      title: 'Viacpro',
      subTitle: 'Radicado no existe',
      buttons: ['Aceptar']
    });
    alert.present();
  }

   load() : void
   {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= {"radicado" : this.rad},
    url       : any      	= this.baseURI + "buscarProceso.php";

    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
          console.dir(data);
          this.proceso = data;
          
      },
      (error : any) =>
      {
         console.dir(error);
      });
    //realizo la consulta de actuaciones
    let headersActu 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    optionsActu 	: any		= {"radicado" : this.rad},
    urlActu      : any      	= this.baseURI + "buscarActuacion.php";

    this.http.post(urlActu,JSON.stringify(optionsActu), headersActu)
    .subscribe((dataActu : any) =>
      {
          console.dir(dataActu);
          this.actuacionesA = dataActu;
          console.log(this.actuacionesA);
         
      },
      (error : any) =>
      {
         console.dir(error);
      });

      //realizo la consulta de archivos
    let headersArchi 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    optionsArchi 	: any		= {"radicado" : this.rad},
    urlArchi      : any      	= this.baseURI + "buscarArchivos.php";

    this.http.post(urlArchi,JSON.stringify(optionsArchi), headersArchi)
    .subscribe((dataArchi : any) =>
      {
          console.dir(dataArchi);
          this.archivos = dataArchi;
         
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
    console.log('ionViewDidLoad BusqRadicadoPage');
  }

}
