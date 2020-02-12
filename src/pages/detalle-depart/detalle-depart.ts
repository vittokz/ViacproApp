import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuPage } from '../menu/menu';
import { DetalleDemandadoPage } from '../detalle-demandado/detalle-demandado';

@IonicPage()
@Component({
  selector: 'page-detalle-depart',
  templateUrl: 'detalle-depart.html',
})
export class DetalleDepartPage {
  idenRecibida : any;
  idDep : any;
  baseURI='https://www.viacpro.com/ionicConexion/';
  public procesos : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public platform: Platform,
    public alert: AlertController) {
    this.idenRecibida = navParams.get("parIden"); 
    this.idDep = navParams.get("parIdDep");  
    console.log(this.idDep.idDepart)  
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

   listarProcesos(paramRadicado: any){
    this.navCtrl.push(DetalleDemandadoPage,{parIden :this.idenRecibida, radicado: paramRadicado});
   }
   
   load() : void
   {
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= {"idDepart":this.idDep.idDepart,"identidad":this.idenRecibida},
    url       : any      	= this.baseURI + "buscarDepartProcesos.php";
    
    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
          console.dir(data);
          this.procesos = data;          
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
    console.log('ionViewDidLoad DetalleDepartPage');
  }

}
