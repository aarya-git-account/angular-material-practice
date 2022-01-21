import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <style>
    .mat-icon{
      font-size: 1.25em;
    }
  </style>
  <button mat-button>
  <mat-icon>pets</mat-icon>
  Click here!
  </button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
