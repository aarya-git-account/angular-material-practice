import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {


  user: User |null|undefined;

  constructor(private route: ActivatedRoute,
              private service: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{let id= params['id'];
        if (!id) id=1;
        this.user = null;
        this.service.users.subscribe(users =>{
          if(users.length == 0) return;
          //after 500ms load the data which shouldnt be used inproduction
          setTimeout(
            () =>{
              this.user = this.service.userById(id);
            }, 500)
      });
  })

}
}
