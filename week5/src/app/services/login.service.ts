import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  valid: boolean;
}

interface Post {
  ok: boolean;
  user: User;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private url = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    this.http.post<Post>(this.url, {email, password}).subscribe(
        res => {
          if (res.ok) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
        }
    );
  }
}
