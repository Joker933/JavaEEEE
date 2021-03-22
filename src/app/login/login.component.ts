import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Token} from '../../token';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  jmeno = '';
  heslo = '';
  user: User[] = [];
  url = '/api/users/login';

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute, private tokenServ: TokenService) { }
  ngOnInit() {
  }

  posli() {
    const body = {
      jmeno: this.jmeno,
      heslo: this.heslo
    }
    if (this.heslo === this.heslo) {
      this.http.post(this.url, body, {observe: 'response'}).subscribe((data) => {
        this.tokenServ.setToken(data);
        console.log(data.body);
        this.router.navigate(['/users']);
      });    } else {
      console.log('Najdi doktora šéfe');
    }
  }

}
