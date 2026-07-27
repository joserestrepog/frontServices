import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment'
import { LocationResponse } from '../models/location-response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly apiUrl =`${environment.apiUrl}/location`;
  
  constructor(private http: HttpClient) { 
  
  }
  getLocations(page: number = 1):Observable<LocationResponse> {
      return this.http.get<LocationResponse>(`${this.apiUrl}?page=${page}`);
    }

  searchByName(name: string, page: number = 1): Observable<LocationResponse> {
  return this.http.get<LocationResponse>(
    `${this.apiUrl}?name=${encodeURIComponent(name)}&page=${page}`
  );
}
}
