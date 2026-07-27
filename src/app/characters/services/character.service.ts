import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterApiResponse } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly apiURL = 'https://rickandmortyapi.com/api/character'; 

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number = 1): Observable<CharacterApiResponse> {
    return this.httpClient.get<CharacterApiResponse>(`${this.apiURL}?page=${page}`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiURL}/${id}`);
  }

}
