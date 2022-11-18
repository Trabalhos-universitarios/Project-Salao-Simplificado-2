import { Component, Input, OnInit } from '@angular/core';
import { FuncionarioInterface } from 'src/interfaces/funcionario-interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit{

  public spinner: boolean = true

  constructor() {}

  ngOnInit(): void {

    // inicia com spinner
    setTimeout(() => {
      this.spinner = false;
    }, 1000);
  }

}
