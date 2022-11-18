import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterModel } from 'src/models/register-model';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private newUserForm: FormBuilder
  ) { }

  ngOnInit(): void { }

  formulario = this.newUserForm.group({
    nome: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
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
      let newUser: RegisterModel = new RegisterModel(
        this.formulario.value.nome,
        this.formulario.value.email,
        this.formulario.value.senha,
        this.formulario.value.telefone
      );
      this.UserService.registerUser(newUser).subscribe(res => {
        console.log('Essa é a resposta', res)

        if (res === 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cadastro efetuado com sucesso!',
            showConfirmButton: false,
            timer: 2500

          })
          this.formulario.reset()
        }
        else if (res === 'error') {
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

