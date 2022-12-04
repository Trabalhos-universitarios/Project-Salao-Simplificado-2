import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'backend/api';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';
import { AdminModel } from '../models/admin.model';
import { first, Observable, map } from 'rxjs';
import { RegisterFuncionarioModel } from '../models/register-funcionario.model';
import { RegisterEscalaModel } from '../models/registerEscala.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  // Método para logar admin no sistema
  public loginUser(newLogin: AdminModel) {

    console.log(JSON.stringify(newLogin));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${API}/login.php`, JSON.stringify(newLogin), httpOptions) //login
  }


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

   //método para inserir novo funcionario no banco de dados
   public registerFunc(newFuncionario: RegisterFuncionarioModel) {

    console.log(JSON.stringify(newFuncionario));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/registrationEmployee.php`, JSON.stringify(newFuncionario), httpOptions); //registration
  }

  //REGISTRAR ESCALA
  public registerEscala(newEscala: RegisterEscalaModel) {

    console.log(JSON.stringify(newEscala));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/setScale.php`, JSON.stringify(newEscala), httpOptions); //registration
  }

}
