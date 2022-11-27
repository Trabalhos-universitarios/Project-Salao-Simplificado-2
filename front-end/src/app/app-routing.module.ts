import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from 'src/admin/components/home-admin/home-admin.component';
import { LoginAdminComponent } from 'src/admin/components/login-admin/login-admin.component';
import { RegisterFuncionariosComponent } from 'src/admin/components/home-admin/register-funcionarios/register-funcionarios.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EscalaComponent } from 'src/admin/components/home-admin/escala/escala.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent},
  {path: 'home', component: HomePageComponent},

  {path: 'admin', component: LoginAdminComponent},
  {path: 'admin/login', component: LoginAdminComponent},
  {path: 'admin/home', component: HomeAdminComponent},
  {path: 'admin/register-new-employee', component: RegisterFuncionariosComponent},
  {path: 'admin/register-escala', component: EscalaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
