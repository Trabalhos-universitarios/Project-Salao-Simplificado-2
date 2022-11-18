import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public comfirmarAgendamento(): void {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cadastro efetuado com sucesso!',
      showConfirmButton: false,
      timer: 2500

    })
  }

  public cancelarAgendamento() {

    Swal.fire({
      title: 'Deseja salvar as operações?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('As auterações não serão salvas', '', 'info')
      }
    })

  }
}
