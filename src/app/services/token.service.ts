import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string | null = null;
  private candidateEmail: string = 'andrejuafor@gmail.com'

  constructor(private http: HttpClient) { }

  fetchToken(): Observable<any> {
    const params = {
      correo: this.candidateEmail
    };
    let headers = new HttpHeaders()
    headers = headers.append(
      "ordProyecto",
      `${env.ordProyecto}`
    )
    return this.http.post(`${env.api}/candidato`, params, { headers });
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }
}
