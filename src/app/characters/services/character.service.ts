import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterApiResponse } from '../models/characters.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

   private readonly apiUrl =`${environment.apiUrl}/character`;

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number = 1): Observable<CharacterApiResponse> {
    return this.httpClient.get<CharacterApiResponse>(`${this.apiUrl}?page=${page}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiUrl}/${id}`);
  }

}
