import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutoLoginGuard } from 'src/app/guards/auto-login.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '' , redirectTo : 'login', pathMatch : 'full' 
  },
  {
    path: 'login', component: LoginComponent, canActivate : [AutoLoginGuard]
  },
  {
    path: 'signup', component: SignupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
