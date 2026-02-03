import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Servicios } from '../../servicios/servicios';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonByName } from '../../pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon implements OnInit {
  pokemon!: PokemonByName;
  loading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private nombre: string,
    private api: Servicios,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.api.getPokemonByName(this.nombre).subscribe((resp) => {
      this.pokemon = resp;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  getImageUrl(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
