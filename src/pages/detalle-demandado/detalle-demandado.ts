import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-detalle-demandado',
  templateUrl: 'detalle-demandado.html',
})
export class DetalleDemandadoPage {
  idenRecibida : any;
  rad : any;
  baseURI='https://www.viacpro.com/ionicConexion/';
  public proceso : Array<any> = [];
  public actuaciones : Array<any> = [];
  public archivos : Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.get("parIden"); 
    this.rad = navParams.get("radicado");   
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
    options 	: any		= {"radicado":this.rad.idRad},
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
    optionsActu 	: any		= {"radicado" : this.rad.idRad},
    urlActu      : any      	= this.baseURI + "buscarActuacion.php";

    this.http.post(urlActu,JSON.stringify(optionsActu), headersActu)
    .subscribe((dataActu : any) =>
      {
          console.dir(dataActu);
          this.actuaciones = dataActu;
         
      },
      (error : any) =>
      {
         console.dir(error);
      });

      //realizo la consulta de archivos
    let headersArchi 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    optionsArchi 	: any		= {"radicado" : this.rad.idRad},
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
    console.log('ionViewDidLoad DetalleDemandadoPage');
  }

}
