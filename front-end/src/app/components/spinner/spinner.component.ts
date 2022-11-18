import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{

  @Output()
  public spinner: boolean = true

  constructor() { }

  ngOnInit(): void {
    // inicia com spinner
    setTimeout(() => {
      this.spinner = false;
    }, 5000);
  }
}
