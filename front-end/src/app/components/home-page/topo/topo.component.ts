import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(
    private onLogout: Router
  ) { }

  ngOnInit(): void {


  }

  public logout() {


    Swal.fire({
      title: 'Deseja realmente sair?',
      showCancelButton: true,

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logout Success!',
          showConfirmButton: false,
          timer: 2000,
        });

        this.onLogout.navigate(['/login'])
      }
    })
  }

}
