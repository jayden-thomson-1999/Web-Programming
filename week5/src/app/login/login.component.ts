import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

// const users = {
//   'johndoe@domain.com': 'password',
//   'janedoe@domain.com': 'qwerty',
//   'danejohns@domain.com': 'asdf'
// };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email = '';
  private password = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login_attempt() {
    // console.log(this.email, this.password);
    // let ok = false;

    // if (users.hasOwnProperty(this.email)) {
    //   if (this.password === users[this.email]) {
    //       ok = true;
    //   }
    // }

    // console.log(ok);
    this.loginService.login(this.email, this.password);
  }
}
