import { Injectable } from '@angular/core';
import { environment as env } from "../../../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class MeetOurDoctorsService {

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
}
