import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminModel } from 'src/admin/models/admin.model';
import { AdminService } from 'src/admin/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private newLoginAdmin: FormBuilder,
    private loginAdminService: AdminService,
    private onLogin: Router
  ) { }


  formulario = this.newLoginAdmin.group({
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
  public loginAdmin() {
    if (this.formulario.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O formulário deve ser preenchido corretamente!',
      });
    }
    else {
      let newLogin: AdminModel = new AdminModel(
        this.formulario.value.email,
        this.formulario.value.senha
      );
      this.loginAdminService.loginUser(newLogin).subscribe(
        (res) => {
        if (res === 'error') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Udsuário não cadastrado!',
          });
        }
        else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login efetuado com sucesso!',
            showConfirmButton: false,
            timer: 2000,
          });
          this.formulario.reset();
          this.onLogin.navigate(['/admin/home'])
        }
      });
    }
  }
}
