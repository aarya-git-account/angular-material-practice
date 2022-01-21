import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

//this is the root module that will compose our application
@Component({
  selector: 'app-contact-manager-app',
  template: `
    <app-nav-bar></app-nav-bar>
  `,
  styles: [
  ]
})
export class ContactManagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry,
              sanitiser: DomSanitizer) {
                iconRegistry.addSvgIconSet( sanitiser.bypassSecurityTrustResourceUrl('assets/avatars.svg'))
               }

  ngOnInit(): void {
  }

}
