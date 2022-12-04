import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/admin/services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { Funcionario, FuncionariosColumns } from 'src/admin/interfaces/funcionario';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterFuncionarioModel } from 'src/admin/models/register-funcionario.model';



const COLUMNS_SCHEMA = [

]

@Component({
  selector: 'app-register-funcionarios',
  templateUrl: './register-funcionarios.component.html',
  styleUrls: ['./register-funcionarios.component.css']
})
export class RegisterFuncionariosComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private newUserForm: FormBuilder,
    private onLogin: Router
  ) { }

  ngOnInit(): void { }

  formulario = this.newUserForm.group({
    nome: new FormControl(null, [Validators.required]),
    cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    confirmPsw: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  hide = true;

  // --> FALTA IMPLEMENTAR A LÓGICA PARA NÃO DEIXAR USUÁRIO DIGITAR ESPAÇOS EM BRANCO <--

  //Botão confirmar registro
  public confirmRegister() {

    if (this.formulario.status === 'INVALID') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'O formulário deve ser preenchido corretamente!',
      })
    }
    else if (this.formulario.value.confirmPsw !== this.formulario.value.senha) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas não conferem!',
        timer: 2500
      })
    }
    else {
      let newFuncionario: RegisterFuncionarioModel = new RegisterFuncionarioModel(
        this.formulario.value.nome,
        this.formulario.value.cpf,
        this.formulario.value.email,
        this.formulario.value.senha,
      );
      this.adminService.registerFunc(newFuncionario).subscribe(resposta => {
        console.log('Essa é a resposta', resposta)

        if (resposta === 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cadastro efetuado com sucesso!',
            showConfirmButton: false,
            timer: 2500
          })
          this.formulario.reset()
          this.onLogin.navigate(['/login'])

        }
        else if (resposta === 'error') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário já cadastrado',
            timer: 2500
          })
        }
      });
    }
  }
}
