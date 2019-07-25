import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  private error = false;

  constructor(private router: Router) { }

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

    if (ok) {
      this.router.navigateByUrl('/account');
    } else {
      this.error = true;
    }
  }
}
