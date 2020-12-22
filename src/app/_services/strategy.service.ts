import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {
  readonly hostUrl = environment.host_url + '/strategies/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getStrategies(): Observable<any> {
    return this.http.get(this.hostUrl, {headers: this.httpHeaders})
  }
}
