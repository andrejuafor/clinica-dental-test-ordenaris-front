import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { environment as env } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubscribeNewsletterService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public createNewsletterSubscription(params: object): any {
    let headers = new HttpHeaders()
    headers = headers.append(
      "ordProyecto",
      `${env.ordProyecto}`,
    )
    headers = headers.append(
      "ordCandidato",
      `${this.tokenService.getToken()}`,
    )
    return this.http.post(`${env.api}/newsletter`, params, { headers })
  }
}
