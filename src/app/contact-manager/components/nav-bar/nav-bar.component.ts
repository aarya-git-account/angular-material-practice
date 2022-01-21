import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

const SMALL_WIDTH_BREAKPOINT=720;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isSmallScreen: boolean | undefined;
  isDarkTheme: boolean = false;
  dir:any = 'ltr';


  users: Observable<User[]> | undefined;

  constructor(private breakpointobserver: BreakpointObserver,
              private userservice: UserService,
              private route: Router) { }

  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir(){
    this.dir = this.dir == 'ltr'? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
    //.observe([Breakpoints.XSmall])
    this.breakpointobserver
    .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe(
      (state: BreakpointState) =>{
        this.isSmallScreen=state.matches;
      }
    );

    this.users = this.userservice.users;
    this.userservice.loadAll();


    // this.users.subscribe(
    //   data => {
    //     if(data.length>0)
    //     {
    //     this.route.navigate(['/contactmanager', data[0].id]);
    //     console.log(data);}
    //     }
    // );

    this.route.events.subscribe(
      () => {
        if(this.isSmallScreen){
          //tODO close the navbar
          this.sidenav.close();
        }
      }
    )
  }
}
