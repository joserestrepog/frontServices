import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationApiResponse } from '../models/locations.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly apiURL = 'https://rickandmortyapi.com/api/location'; 

  constructor(private httpClient: HttpClient) { }

   getLocations(page: number = 1): Observable<LocationApiResponse> {
      return this.httpClient.get<LocationApiResponse>(`${this.apiURL}?page=${page}`);
    }
}
