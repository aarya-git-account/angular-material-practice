import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggleDir = new EventEmitter<void>();

  constructor(private dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private route: Router) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void{
    let dialogRef= this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('this dialog is closed', result);

      if(result){
        this.openSnackBar('contact added', 'Navigate')
        .onAction().subscribe(()=>{
            //navigate to the contact just added
            this.route.navigate(['/contactmanager', result.id])
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<TextOnlySnackBar>{
    return this._snackBar.open(message, action,{
      duration:5000,
    });
  }

}
