import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { 
        path: '', canActivate: [AuthGuard],
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),  
      },
    ]
    },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
