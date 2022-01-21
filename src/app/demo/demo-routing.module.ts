import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'flex-box', component: FlexBoxComponent },
  { path: '**', redirectTo: 'button' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
