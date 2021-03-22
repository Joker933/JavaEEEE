import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  url = 'api/users/';
 //  {headers: {token: 'd3b62774-4260-4413-bec6-24ccd72638b9'}}
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient, private router: Router, private tokenServ: TokenService) {
    this.http.get<User[]>(this.url, this.httpOptions).subscribe(data  => {
      console.log(data);
      this.users = data;
    });
  }

  smaz(id: number) {
    this.http.delete(this.url + id).subscribe((data: User) => {
      console.log(data);
      for(let i = 0; i < this.users.length; i++) {
        let user = this.users[i];
        if (user.id === id) this.users.splice(this.users.indexOf(user), 1);
      }
    });
  }

  detaily(id: number) {
    this.router.navigate(['/user'], {queryParams: {id}});
  }

  ngOnInit() {
  }

}
