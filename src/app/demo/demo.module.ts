import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../shared/material.module';
import { FlexBoxComponent } from './flex-box/flex-box.component';



@NgModule({
  declarations: [
    ButtonComponent,
    FlexBoxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
})
export class DemoModule { }
