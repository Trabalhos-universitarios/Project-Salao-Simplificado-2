import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { PeriodicElement } from 'src/interfaces/teste-interface';
import { Escala } from 'src/models/escala-model';
import { FuncionarioService } from 'src/services/funcionario.service';
import { ModalDialogComponent } from '../modal-dialog.component';
import { PainelComponent } from '../../painel.component';
import { Agendamento } from 'src/models/agendamento-model';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-table-escala',
  templateUrl: './table-escala.component.html',
  styleUrls: ['./table-escala.component.css']
})
export class TableEscalaComponent implements OnInit {

  public condicao: Escala = new Escala()

  public disabled: boolean = true;

  public horariosList: PeriodicElement[] = [
    { horarios: '09:00' },
    { horarios: '10:00' },
    { horarios: '11:00' },
    { horarios: '13:00' },
    { horarios: '14:00' },
    { horarios: '15:00' },
    { horarios: '16:00' },
    { horarios: '17:00' },
    { horarios: '18:00' },
    { horarios: '19:00' }
  ];

  public horarios = this.horariosList;

  constructor(
    private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
  ) {

    console.log('Aqui é o getUltimoFuncionariio: ',PainelComponent.getUltimoFuncionario());
    let teste = {nome: PainelComponent.getUltimoFuncionario()}


    this.funcionarioService.getEscala(teste).subscribe(
      resposta => {
        this.condicao = resposta
        console.log('A condicao é: ', resposta);
      }
    )
  }

  ngOnInit(): void { }

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

  agendarHorario(hora: string) {

    let agendamento: Agendamento = new Agendamento();
    let date: Date = new Date('2022-11-20')

    let res: any

    agendamento.emailCliente = LoginComponent.getUltimoLogin();
    agendamento.nomeFuncionario = PainelComponent.getUltimoFuncionario();
    agendamento.dataAgendamento = '2022-11-20';
    agendamento.hora = hora;

    console.log('Agendamento: ', agendamento);

    this.funcionarioService.postAgendamento(agendamento).subscribe(
      resposta => {
        res = resposta

        console.log('Está é a resposta: ', res);

      }
    )




  }
}
