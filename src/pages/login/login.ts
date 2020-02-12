import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuPage } from '../menu/menu';
import {HttpServiceProvider} from '../../providers/http-service/http-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Platform} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public validar : Array<any> = [];
  login: FormGroup;
  //baseURI='http://localhost/ionic-php-mysql/';
  baseURI='https://www.viacpro.com/ionicConexion/';
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,public formBuilder: FormBuilder,
    public httpService:HttpServiceProvider,
    public http: HttpClient,
    public platform: Platform){
      this.platform = platform; 
      this.login = this.createMyForm();
  }

  alertOk() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'Acceso Correcto',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  alertError() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'Datos Incorrectos',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  validarLogin(){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= { "key" : "create", "identidad" : this.login.value.identidad, "clave" : 
    this.login.value.clave },
    url       : any      	= this.baseURI + "validarLogin.php";

  this.http.post(url, JSON.stringify(options), headers)
  .subscribe((data : any) =>
  {
    console.log(data.resul);
    if(data.result=="ok"){
        this.alertOk();
        this.navCtrl.push(MenuPage,this.login.value.identidad);
    }
    else{
      this.alertError();
    }    
  },
  (error : any) =>
  {
    
  });
  
/*
    this.httpService.validarAcceso(this.login.value.identidad,this.login.value.clave)
    .subscribe(data=>{
      
    })*/
  }  

  irRegistro(){
    //this.navCtrl.push(PerfilPage,this.idenRecibida);
  }

  exit(){
    let alert = this.alertCtrl.create({
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

  private createMyForm(){
    return this.formBuilder.group({
      identidad: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }
  
  ionViewDidLoad() {
    
  }
}
