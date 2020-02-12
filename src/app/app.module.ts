import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { AtencionPage } from '../pages/atencion/atencion';
import { ProcesosPage } from '../pages/procesos/procesos';
import { JuzgadosPage } from '../pages/juzgados/juzgados';
import { BusqRadicadoPage } from '../pages/busq-radicado/busq-radicado';
import { BusqDemandadoPage } from '../pages/busq-demandado/busq-demandado';
import { DetalleDemandadoPage } from '../pages/detalle-demandado/detalle-demandado';
import { BusqDemandantePage } from '../pages/busq-demandante/busq-demandante';
import { DetalleDemandantePage } from '../pages/detalle-demandante/detalle-demandante';
import { DetalleJuzgadoPage } from '../pages/detalle-juzgado/detalle-juzgado';
import { AlertasPage } from '../pages/alertas/alertas';
import { AlertasDiaPage } from '../pages/alertas-dia/alertas-dia';
import { AlertasSinVencerPage } from '../pages/alertas-sin-vencer/alertas-sin-vencer';
import { AlertasVencidasPage } from '../pages/alertas-vencidas/alertas-vencidas';
import { BusqMunicipioPage } from '../pages/busq-municipio/busq-municipio';
import { DetalleMunicipioPage } from '../pages/detalle-municipio/detalle-municipio';
import { BusqDepartPage } from '../pages/busq-depart/busq-depart';
import { DetalleDepartPage} from '../pages/detalle-depart/detalle-depart';
import { RecuperarClavePage} from '../pages/recuperar-clave/recuperar-clave';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    LoginPage,
    MenuPage,
    AtencionPage,
    ProcesosPage,
    JuzgadosPage,
    BusqRadicadoPage,
    BusqDemandadoPage,
    DetalleDemandadoPage,
    BusqDemandantePage,
    RecuperarClavePage,
    DetalleDemandantePage,
    DetalleJuzgadoPage,
    AlertasPage,AlertasDiaPage,AlertasSinVencerPage,AlertasVencidasPage,BusqMunicipioPage,DetalleMunicipioPage,
    BusqDepartPage,DetalleDepartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    LoginPage,
    MenuPage,
    AtencionPage,
    ProcesosPage,
    JuzgadosPage,
    BusqRadicadoPage,
    BusqDemandadoPage,
    DetalleDemandadoPage,
    RecuperarClavePage,
    BusqDemandantePage,
    DetalleDemandantePage,
    DetalleJuzgadoPage,AlertasPage,AlertasDiaPage,AlertasSinVencerPage,AlertasVencidasPage,BusqMunicipioPage,
    DetalleMunicipioPage,BusqDepartPage,DetalleDepartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider
  ]
})
export class AppModule {}
