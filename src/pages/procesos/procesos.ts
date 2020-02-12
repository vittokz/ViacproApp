import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { BusqRadicadoPage } from '../busq-radicado/busq-radicado';
import { BusqDemandadoPage } from '../busq-demandado/busq-demandado';
import { BusqDemandantePage } from '../busq-demandante/busq-demandante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpServiceProvider} from '../../providers/http-service/http-service';
import { HttpClient} from '@angular/common/http';
import { BusqMunicipioPage } from '../busq-municipio/busq-municipio';
import { BusqDepartPage } from '../busq-depart/busq-depart';


@IonicPage()
@Component({
  selector: 'page-procesos',
  templateUrl: 'procesos.html',
})
export class ProcesosPage {
  idenRecibida: any;
  fRadicado: FormGroup;
  fDemandado: FormGroup;
  fDemandante: FormGroup;
  fMunicipio: FormGroup;
  
  baseURI='https://www.viacpro.com/ionicConexion/';
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,public formBuilder: FormBuilder,
   public httpService:HttpServiceProvider,
   public http: HttpClient,public platform: Platform,
   public alert: AlertController) {
    this.idenRecibida = navParams.data;
    this.fRadicado = this.formRadicado();
    this.fDemandado = this.formDemandado();
    this.fDemandante= this.formDemandante();
    this.fMunicipio= this.formMunicipio();
    
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

   busqRadicado(){
    this.navCtrl.push(BusqRadicadoPage,{parRadicado : this.fRadicado.value.radicado, parIden :this.idenRecibida});
  }

  busqDemandado(){
    this.navCtrl.push(BusqDemandadoPage,{parNombre : this.fDemandado.value.demandado, parIden :this.idenRecibida});
  }

  busqDemandante(){
    this.navCtrl.push(BusqDemandantePage,{parNombre : this.fDemandante.value.demandante, parIden :this.idenRecibida});
  }

  busqMunicipio(){
    this.navCtrl.push(BusqMunicipioPage,{parMunicipio : this.fMunicipio.value.municipio, parIden :this.idenRecibida});
  }

  busqDepartamento(){
    this.navCtrl.push(BusqDepartPage,{parIden :this.idenRecibida});
  }
  
  alertError() {
    let alert = this.alertCtrl.create({
      title: 'Viacpro',
      subTitle: 'No se registro',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  private formRadicado(){
    return this.formBuilder.group({
      radicado: ['', Validators.required]
    });
  }
  private formDemandado(){
    return this.formBuilder.group({
      demandado: ['', Validators.required]
    });
  }

  private formDemandante(){
    return this.formBuilder.group({
      demandante: ['', Validators.required]
    });
  }

  private formMunicipio(){
    return this.formBuilder.group({
      municipio: ['', Validators.required]
    });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcesosPage');
  }


}
