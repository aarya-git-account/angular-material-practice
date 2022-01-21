import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {

  private _users : BehaviorSubject<User[]>;

  //we dont want to expose this to external components to manipulate it
  private dataStore: {
    users: User[];
  }

  constructor(private http: HttpClient) {
    //initialise datastore
     this.dataStore= { users: [] };
     this._users = new BehaviorSubject<User[]>([]);
  }

    get users(): Observable<User[]>{
      return this._users.asObservable();
    }

    userById(id: number) {
      console.log(this.dataStore.users.find(x => x.id == id));
      return this.dataStore.users.find(x => x.id == id);
    }

    loadAll() {
      const userurl= 'https://angular-material-api.azurewebsites.net/users';

      return this.http.get<User[]>(userurl)
      .subscribe(data => { this.dataStore.users = data;
        //to publish data to all subscribing components
        this._users.next( Object.assign({},this.dataStore).users);
      },
        error => {console.log('Failed to load the data')}
      );
    }

    addUser(user: User): Promise<User>{
      return new Promise((resolver, reject)=>
      {
        user.id=this.dataStore.users.length+1;
        this.dataStore.users.push(user);
        this._users.next( Object.assign({},this.dataStore).users);
        resolver(user);
      });
    }

}



