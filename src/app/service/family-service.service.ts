import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Family } from '../models/Family';

@Injectable({
  providedIn: 'root'
})


export class FamilyServiceService {


  baseUrl: String = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  Read(): Observable<Family[]> {

    return this.http.get<Family[]>(this.baseUrl + 'api/family/read');

  }
}
