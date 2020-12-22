import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  readonly hostUrl = environment.host_url + '/account/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  user = {
    jwt: ''
  }

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    let req_data = {email: 'meysam.g7@gmail.com', password: 'pass123456'}
    return this.http.post(this.hostUrl + 'authenticate', req_data, {headers: this.httpHeaders})
  }
}
