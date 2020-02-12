import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpServiceProvider} from '../../providers/http-service/http-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-atencion',
  templateUrl: 'atencion.html',
})
export class AtencionPage {
  soporte: FormGroup;
  baseURI='https://www.viacpro.com/ionicConexion/';
  idenRecibida: any;
  public description="hola";
  public detalles;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,public formBuilder: FormBuilder,
   public httpService:HttpServiceProvider,
   public http: HttpClient,public platform: Platform,
   public alert: AlertController) {
    this.idenRecibida = navParams.data;
    this.soporte = this.createMyForm();
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

   alertOk() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'Solicitud Ingresada Correctamente',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  alertError() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'No se registro',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  validarSoporte(){
    
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= { "key" : "create", "detalle" : this.soporte.value.detalle, "identidad" : 
    this.idenRecibida },
    url       : any      	= this.baseURI + "insertarAtencion.php";
    this.http.post(url,JSON.stringify(options), headers)
    .subscribe((data : any) =>
      {
        console.log(data);
        if(data.result=="ok"){
          this.alertOk();
          
         // this.navCtrl.push(MenuPage,this.soporte.value.identidad);
      }
      else{
        this.alertError();
      }  
      },
      (error : any) =>
      {
         console.dir(error);
      });
  }  


  ionViewDidLoad() {
    console.log('ionViewDidLoad AtencionPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      detalle: ['', Validators.required]
    });
  }
}
