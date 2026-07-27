import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  currentPage = 1;
  hasNext = false;
  hasPrev = false;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      this.currentPage = Number(params.get('page')) || 1;

      this.loadCharacters(this.currentPage);

    });

  }

  loadCharacters(page: number): void {

    this.loading = true;
    this.error = false;

    this.characterService.getCharacters(page).subscribe({

      next: (response) => {

        this.characters = response.results;

        this.hasNext = response.info.next !== null;
        this.hasPrev = response.info.prev !== null;

        this.loading = false;

      },

      error: () => {

        this.error = true;
        this.loading = false;

      }

    });

  }

  nextPage(): void {

    if (!this.hasNext) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage + 1
      }
    });

  }

  previousPage(): void {

    if (!this.hasPrev) return;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage - 1
      }
    });

  }

}
