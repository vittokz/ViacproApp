import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {
    
  }
 
  validarAcceso(identidad,clave){
    return this.http.get('http://localhost/ionic-php-mysql/validarLogin.php')
  }
   
}
