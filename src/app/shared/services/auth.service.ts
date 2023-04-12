import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IntSession } from 'src/app/modules/auth/interfaces/sesion.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  webservice = environment.webservice;

  get token(): string { //getter del token
    return localStorage.getItem('token_mcc') || '';
  }
  
  constructor(private http: HttpClient) { }

  estasAutenticado(): boolean {
    if(!this.token){ return false; }
    return true;
  }

  signIn(data: any):Observable<IntSession>{
    const URL = `${this.webservice}/loginUser`;
    return this.http.post<IntSession>( URL, data )
    .pipe(
      tap(( data ) => { 
        if (data.token) {
          localStorage.setItem('token_mcc',JSON.stringify(data.token));
        }else{
          return;
        }
      })
    );
  }
}
