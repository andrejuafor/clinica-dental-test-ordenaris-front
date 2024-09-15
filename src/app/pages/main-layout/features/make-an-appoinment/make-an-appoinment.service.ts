import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { environment as env } from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MakeAnAppoinmentService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  public getDoctorsList(): any {
    let headers = new HttpHeaders()
    headers = headers.append(
      "ordProyecto",
      `${env.ordProyecto}`,
    )
    headers = headers.append(
      "ordCandidato",
      `${this.tokenService.getToken()}`,
    )
    return this.http.get(`${env.api}/listaDoctores`, { headers })
  }

  public createAppointment(params: object): any {
    let headers = new HttpHeaders()
    headers = headers.append(
      "ordProyecto",
      `${env.ordProyecto}`,
    )
    headers = headers.append(
      "ordCandidato",
      `${this.tokenService.getToken()}`,
    )
    return this.http.post(`${env.api}/mensaje`, params, { headers })
  }
}
