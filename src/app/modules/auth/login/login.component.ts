import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SignIn } from '../interfaces/sesion.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];

  formLogin! : FormGroup;
  emailValidate: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  urlEnviar : string = ''; 

  constructor(
    private _serAuth: AuthService,
    private fb : FormBuilder,
    private router: Router,
    private rutaActiva: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.rutaActiva.queryParams.subscribe(params => { this.urlEnviar = params["url"] });
    this.initForm();
  }

  initForm(){
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailValidate)]],
			password: ['', [Validators.required, Validators.minLength(8)]]
    }); 
  }

  get email(){
    return this.formLogin.get('email');
  }

  get password(){
    return this.formLogin.get('password');
  }

  get emailError(): string {  //validación del email 
    const errors = this.email?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El email no tiene formato correcto'
    }
    return '';
  }

  get passwordError(): string { //validación del password 
    const errors = this.password?.errors;
    if (errors?.['required']) {
      return 'La contraseña es obligatoria';
    }else if (errors?.['minLength']) {
      return 'La contraseña debe tener minimo 8 caracteres'
    }
    return '';
  }

  login(){
    this.formLogin.markAllAsTouched();
    if (this.formLogin.invalid) { return; }

    if (this.formLogin.valid) {
      const form : SignIn = this.formLogin.value;

      if (this.urlEnviar != undefined) {
        this.servLog(form, `/${this.urlEnviar}`);
      }else {
        this.servLog(form, `/`);
      }
    }
  }

  servLog(form:SignIn, url :string ){
    this._serAuth.signIn(form).subscribe({
      next:(resp) => {
        console.log(resp);
        this.router.navigate([`${url}`]);  
      },
      error: (err) => { console.log(err)  }
    });
  }

  /* servLog(form:SignIn){
    this._serAuth.signIn(form).subscribe({
      next:(resp) => {
        console.log(resp);
        this.router.navigate(['/']);  
      },
      error: (err) => { console.log(err)  }
    });
  } */

   /* fieldsValidate(campo:string){
    return this.formLogin.get(campo)?.invalid && this.formLogin.get(campo)?.touched;
  } */



  
  

}
