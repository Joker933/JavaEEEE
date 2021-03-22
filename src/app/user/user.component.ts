import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  token: string[] = [];
  users: User;
  url = 'api/users/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, private tokenServ: TokenService) {
    this.activatedRoute.queryParams.subscribe(i => {
      console.log(i);
      this.http.get(this.url + i.id, this.httpOptions).subscribe((data: User) => {
        this.token = this.tokenServ.getToken();
        console.log(this.tokenServ.getToken());
        this.users = data;
        console.log(this.users);
      });
    });
  }

  ngOnInit() {
  }

}
