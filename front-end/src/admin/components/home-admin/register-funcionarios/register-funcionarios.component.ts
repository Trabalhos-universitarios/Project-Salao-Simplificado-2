import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/admin/services/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { Funcionario, FuncionariosColumns } from 'src/admin/interfaces/funcionario';



const COLUMNS_SCHEMA = [

]

@Component({
  selector: 'app-register-funcionarios',
  templateUrl: './register-funcionarios.component.html',
  styleUrls: ['./register-funcionarios.component.css']
})
export class RegisterFuncionariosComponent implements OnInit {

  public USER_DATA: any

  //displayedColumns: string[] = ['name', 'CPF', 'email', 'senha', 'Edit'];
  displayedColumns: string[] = FuncionariosColumns.map((col) => col.key);
  //columnsSchema: any = COLUMNS_SCHEMA;
  columnsSchema: any = FuncionariosColumns;
  dataSource = new MatTableDataSource<FuncionarioInterface[]>();


  constructor(
    private adminService: AdminService
  ) {
   }

  ngOnInit(): void {

    this.adminService.getEmployee().subscribe(
      (resposta: any) => {
        this.dataSource.data = resposta
        console.log('Essa é a resposta do dataSource: ', this.dataSource.data);

      }
    )
  }



  // Função para adicionar novos campos a tabela
  addRow() {
    const newRow: Funcionario = {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      isEdit: true
    };
    this.dataSource.data = [...this.dataSource.data];
  }

  // Função para remover campos da tabela
  /*removeRow(id: number) {

    if (this.dataSource) {
      Swal.fire({
        title: 'Deseja realmente deletar?',

        showCancelButton: true,
        confirmButtonText: 'Sim',

      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        /*if (result.isConfirmed) {
          this.dataSource = this.dataSource.filter((func: any) => func.id !== id);

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Deletado com',
            showConfirmButton: false,
            timer: 1500
          })
        } else if (result.isDenied) {
        }
      })
    }
  }*/

  public dialog() {

  }

}
