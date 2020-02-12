import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //this.pushSetup();
    });
  }
/*
  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID:'872064874512'
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };
  
   const pushObject: PushObject = this.push.init(options);
   pushObject.on('notificacion').subscribe((notification: any) => console.log('Notificacion recibida', notification));
   pushObject.on('registrado').subscribe((registration: any) => console.log('Dispositivo registrado', registration));
   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
*/
}
