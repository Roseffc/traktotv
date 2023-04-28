import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

type BodyType = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class TraktoService {
  private KEYTOKEN = 'trakto';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(body: BodyType) {
    return this.httpClient
      .post(environment.traktoUrl + '/auth/signin', body)
      .subscribe({
        next: (result: any) => {
          this.setToken(result.access_token);
          this.router.navigateByUrl('/home');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getToken() {
    return String(window.localStorage.getItem(this.KEYTOKEN));
  }

  setToken(token: string) {
    window.localStorage.setItem(this.KEYTOKEN, token);
  }

  getDocument() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+ token
      })
    };
    return this.httpClient
      .get(
        `${environment.traktoUrl}/document?total_per_page=10&order_by=title&order_orientation=desc`,
        httpOptions
      )

  }
}
