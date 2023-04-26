import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

type BodyType={
  email: string;
  password: string
};


@Injectable({
  providedIn: 'root'
})

export class TraktoService {

private KEYTOKEN = 'trakto'

constructor(
  private httpClient: HttpClient,
  private router: Router
) { }

login(body:BodyType) {
  return this.httpClient.post(environment.traktoUrl, body)
     .subscribe({
      next: (result:any)=> {
        this.setToken(result.access_token);
        this.router.navigateByUrl('/home')
      },
      error: (error)=> {
        console.log(error)
      }
   });
}

getToken() {
  return String(window.localStorage.getItem(this.KEYTOKEN));
}

setToken(token:string) {
  window.localStorage.setItem(this.KEYTOKEN, token);
}

}
