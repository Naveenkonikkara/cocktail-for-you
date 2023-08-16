/*  HTTP API service is used to get the API post related to selected Cocktail Catagory  */

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }

  getCocktails(apiUrl: string): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }
}
