import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { Agendamento } from 'src/models/agendamento-model';
import { Escala } from 'src/models/escala-model';

import { API } from './../../backend/api';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}

  // Método para buscar os funcionários no banco e mostrar na tabela
  public getEmployee(): Observable<FuncionarioInterface[]> {

    const httpOptions = {
      headers: new HttpHeaders({'Contente-Type': 'aplication/json'})
    };

    // Buscar na base de dados
    return this.http.get<FuncionarioInterface[]>(`${API}/getEmployee.php`)
    .pipe(
      first(),//Encerra conexão
      res => res
    )
  }


  // Método para buscar no banco os horários disponíveis para agendamento de cada funcionário
  public getEscala(nome: FuncionarioInterface) {

    console.log(JSON.stringify(nome));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/getScale.php`, JSON.stringify(nome), httpOptions); //registration
  }


  // Metodo para agendar horário
  public postAgendamento(agendamento: Agendamento) {

    console.log(JSON.stringify(agendamento));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/setSchedule.php`, JSON.stringify(agendamento), httpOptions); //registration
  }


}
