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

  Create(model: Family): Observable<Family> {

    return this.http.post<Family>(this.baseUrl + 'api/family/create', model);

  }

  Update(model: Family): Observable<Family> {

    return this.http.put<Family>(this.baseUrl + 'api/family/update', model);

  }

  Read(): Observable<Family[]> {

    return this.http.get<Family[]>(this.baseUrl + 'api/family/read');

  }
  ReadById(id: number): Observable<Family> {

    return this.http.get<Family>(this.baseUrl + 'api/family/' + id);

  }
  Delete(id: number): Observable<Family> {

    return this.http.delete<Family>(this.baseUrl + 'api/family/' + id);

  }
}
