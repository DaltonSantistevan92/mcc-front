import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IntSession } from 'src/app/modules/auth/interfaces/sesion.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  webservice = environment.webservice;

  get token(): string {
    //getter del token
    return localStorage.getItem('token_mcc') || '';
  }

  constructor(private http: HttpClient, private router: Router) {}

  estasAutenticado(): boolean {
    if (!this.token) {
      return false;
    }
    return true;
  }

  //redirección por rol

  signIn(data: any): Observable<IntSession> {
    const URL = `${this.webservice}/login`;
    return this.http.post<IntSession>(URL, data).pipe(
      tap((data) => {

         localStorage.setItem('user_mcc', JSON.stringify(data.data));
        if (data.token) {
          localStorage.setItem('token_mcc', JSON.stringify(data.token));
        } else {
          return;
        }
      })
    );
  }

  logout() {
    if (this.estasAutenticado()) {
      localStorage.clear();
      //this.router.navigateByUrl('/', { replaceUrl: true });
      this.router.navigate(['/home']);
    }
  }
}
