import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../models/characters.model';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character | null = null;
  loading = false;

  constructor(
    private router: ActivatedRoute,
    private characterService: CharacterService
    ) { }

  ngOnInit(): void {

    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id).subscribe(character => {
      this.character = character;
      this.loading = false;
    });

  }

}
