import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/characters.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  loading = false;
  error = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {

    this.loading = true;
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });

  }

}
