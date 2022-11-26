import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

const USER_DATA = [
  {id: 1, "name": "Johnny Carvalho", "CPF": '09898767656', "email": "example@example.com", "senha": '999999999'},
  {id: 2, "name": "Lucas Lemes", "CPF": '09898767656', "email": "example@example.com", "senha": '999999999'},
  {id: 3, "name": "Bruna Boccaldi", "CPF": '09898767656', "email": "example@example.com", "senha": '999999999'}
];

const COLUMNS_SCHEMA = [
  {
      key: "name",
      type: "text",
      label: "Full Name"
  },
  {
      key: "CPF",
      type: "text",
      label: "CPF"
  },
  {
      key: "email",
      type: "text",
      label: "email"
  },
  {
    key: "senha",
    type: "text",
    label: "senha"
},
{
  key: "Edit",
  type: "isEdit",
  label: "Edit"
}
]

@Component({
  selector: 'app-register-funcionarios',
  templateUrl: './register-funcionarios.component.html',
  styleUrls: ['./register-funcionarios.component.css']
})
export class RegisterFuncionariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'CPF', 'email', 'senha', 'Edit'];
  dataSource: any = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;


  // Função para adicionar novos campos a tabela
  addRow() {
    const newRow = {"name": "", "occupation": "", "dateOfBirth": "", "age": 0, isEdit: true}
    this.dataSource = [newRow, ...this.dataSource];
  }

  // Função para remover campos da tabela
  removeRow(id: number) {

    if (this.dataSource) {
      Swal.fire({
        title: 'Deseja realmente deletar?',

        showCancelButton: true,
        confirmButtonText: 'Sim',

      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.dataSource = this.dataSource.filter((func: any) => func.id !== id);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Deletado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
        } else if (result.isDenied) {
        }
      })
    }
  }

  public dialog() {

  }

}
