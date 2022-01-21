import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars= ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  user!: User;
  id = 1;
  nameofuser = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
              private userservice: UserService) { }

  ngOnInit(): void {
    this.user= new User();
  }

  dismiss(): void{
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    if (this.nameofuser.hasError('required')) {
      return 'You must enter a value';
    }

    return this.nameofuser.hasError('required') ? 'You must enter a value' : '';
  }

  save() {
    this.user.name = this.nameofuser.value;

    if(this.nameofuser.value == undefined)
    {
      this.dialogRef.disableClose = true;
    }
    else
    {
    this.userservice.addUser(this.user).then(
      user => {this.dialogRef.close(user);
    });
  }
}
}
