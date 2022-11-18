import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'backend/api';
import { Observable } from 'rxjs';
import { UserListLogin } from 'src/models/login-model';
import { RegisterModel } from 'src/models/register-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  //método para inserir novo usuário no banco de dados
  public registerUser(newUser: RegisterModel) {
  
    console.log(JSON.stringify(newUser));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/registration.php`, JSON.stringify(newUser), httpOptions); //registration
  }

  // Método para logar usuário no sistema
  public loginUser(newLogin: UserListLogin) {

    console.log(JSON.stringify(newLogin));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(`${API}/login.php`, JSON.stringify(newLogin), httpOptions) //login
  }
}
