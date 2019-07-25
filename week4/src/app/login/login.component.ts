import { Component, OnInit } from '@angular/core';

const users = {
  'johndoe@domain.com': 'password',
  'janedoe@domain.com': 'qwerty',
  'danejohns@domain.com': 'asdf'
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email = '';
  private password = '';

  constructor() { }

  ngOnInit() {
  }

  login_attempt() {
    console.log(this.email, this.password);
    let ok = false;

    if (users.hasOwnProperty(this.email)) {
      if (this.password === users[this.email]) {
          ok = true;
      }
    }

    console.log(ok);
  }
}
