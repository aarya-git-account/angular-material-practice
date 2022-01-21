import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
        { path: '**', redirectTo:'' },
];

@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolBarComponent,
    MainContentComponent,
    NavBarComponent,
    NotesComponent,
    NewContactDialogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    UserService
  ]
})
export class ContactManagerModule { }
