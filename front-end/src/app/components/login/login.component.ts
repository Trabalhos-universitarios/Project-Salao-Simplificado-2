import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserListLogin } from 'src/models/login-model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public static ultimoLogin: string

  constructor(
    private newLoginUser: FormBuilder,
    private loginUserService: UserService,
    private onLogin: Router
  ) {}

  formulario = this.newLoginUser.group({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  hide = true;

  // --> FALTA IMPLEMENTAR A LÓGICA PARA NÃO DEIXAR USUÁRIO DIGITAR ESPAÇOS EM BRANCO <--

  ngOnInit(): void {}

  // Método para logar usuário no sistema
  public loginUser() {
    if (this.formulario.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O formulário deve ser preenchido corretamente!',
      });
    }
    else {
      let newLogin: UserListLogin = new UserListLogin(
        this.formulario.value.email,
        this.formulario.value.senha
      );
      this.loginUserService.loginUser(newLogin).subscribe(
        (res) => {
        if (res === 'error') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Udsuário não cadastrado!',
          });
        }
        else {
          LoginComponent.ultimoLogin = newLogin.email

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login efetuado com sucesso!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.formulario.reset();
          this.onLogin.navigate(['/home'])
        }
      });
    }
  }

  public static getUltimoLogin() {
    return LoginComponent.ultimoLogin
  }
}
