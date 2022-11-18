import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FuncionarioService } from 'src/services/funcionario.service';
import { FuncionarioInterface } from '../../../../interfaces/funcionario-interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {

  public funcionariosList: FuncionarioInterface[] = []
  public static ultimoFuncionario: FuncionarioInterface | any

  public disponivel: string = 'Disponível'
  public indisponivel: string = 'Indisponível'

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
    ) {

      this.funcionarioService.getEmployee().subscribe(
        resposta => {
          this.funcionariosList = resposta
        }
      )
    }


    public static getUltimoFuncionario() {
      return PainelComponent.ultimoFuncionario
    }

    openDialog(nome: FuncionarioInterface) {

      PainelComponent.ultimoFuncionario = nome



    // debugger
    const dialogRef = this.dialog.open(ModalDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  // Nomae das colunas da tabela
  displayedColumns: string[] = [
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
    'domingo',
  ];

  // Ao clicar em um nome na tabela
  clickedRows = new Set<FuncionarioInterface>();

}
