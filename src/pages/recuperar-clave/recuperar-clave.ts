import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpServiceProvider} from '../../providers/http-service/http-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Platform} from 'ionic-angular';
import { HomePage} from '../../pages/home/home';
/**
 * Generated class for the RecuperarClavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-clave',
  templateUrl: 'recuperar-clave.html',
})
export class RecuperarClavePage {
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
      subTitle: 'Email valido, se envío su contraseña!!',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  
  alertError() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'Email invalido, verifique!!!',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  
  recuperar(){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
    options 	: any		= { "key" : "create", "email" : this.login.value.email},
    url       : any      	= this.baseURI + "validarEmail.php";
    console.log(this.login.value.email);
  this.http.post(url, JSON.stringify(options), headers)
  .subscribe((data : any) =>
  {
    console.log(data.result);
    if(data.result=="ok"){
        this.alertOk();
        this.navCtrl.push(RecuperarClavePage);
    }
    else{
      this.alertError();
    }    
  },
  (error : any) =>
  {
    
  });
  
  }  

  volver(){
    this.navCtrl.push(HomePage);
 }
  
  
  private createMyForm(){
    return this.formBuilder.group({
      email: ['', Validators.required]
     });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarClavePage');
  }

}
