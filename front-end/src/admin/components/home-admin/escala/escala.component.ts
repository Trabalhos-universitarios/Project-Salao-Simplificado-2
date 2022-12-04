import { Component, OnInit } from '@angular/core';
import { RegisterEscalaModel } from 'src/admin/models/registerEscala.model';
import { AdminService } from 'src/admin/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escala',
  templateUrl: './escala.component.html',
  styleUrls: ['./escala.component.css']
})
export class EscalaComponent implements OnInit {

  constructor(
    private escalaService: AdminService
  ) {}

  public segunda: any;
  public terca: any;
  public quarta: any;
  public quinta: any;
  public sexta: any;
  public sabado: any;
  public domingo: any;

  enviarEscala() {

    let escalas: RegisterEscalaModel = new RegisterEscalaModel(
      this.segunda,
      this.terca,
      this.quarta,
      this.quinta,
      this.sexta,
      this.sabado,
      this.domingo
    )

    if (escalas.segunda == undefined || escalas.terca == undefined || escalas.quarta == undefined
      || escalas.quinta == undefined || escalas.sexta == undefined || escalas.sabado == undefined
      || escalas.domingo == undefined)
    {
      console.log('errrrooror');
    }
    else{
      this.escalaService.registerEscala(escalas).subscribe(
        resposta => {
  
          if (resposta === 'success') {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Cadastro efetuado com sucesso!',
              showConfirmButton: false,
              timer: 2500
            })
          }
        }
      )
    }
    


  }


  ngOnInit() {

  }

  displayedColumns: string[] = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo', 'enviar'];
  dataSource = [0]


}
