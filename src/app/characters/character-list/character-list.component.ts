import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/characters.model';
import { LoadingService } from '../../shared/services/loading.service'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  error = false;

  constructor(
    private characterService: CharacterService,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.error = false;
    this.loadingService.show();

    this.characterService.getCharacters().pipe(finalize(() => this.loadingService.hide()))
      .subscribe({
        next: (response) => {
          this.characters = response.results;
        },
        error: () => {
          this.error = true;
        }
      });

  }

}
