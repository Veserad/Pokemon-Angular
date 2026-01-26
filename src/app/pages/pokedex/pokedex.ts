import { ChangeDetectorRef, Component } from '@angular/core';
import { Servicios } from '../../servicios/servicios';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  pokemones!: any;
  loading = true;
  constructor(
    private api: Servicios,
    private cdr: ChangeDetectorRef,
  ) {
    // this.init;
    this.pokemones = this.api.getAllPokemons();
  }

  // async init() {
  //   try {
  //     this.pokemones = await this.api.getAllPokemons();
  //     console.log('Pokemones cargados:', this.pokemones);
  //     this.loading = false;
  //   } catch (error) {
  //     console.log('Error al cargar los pokemones:', error);
  //   } finally {
  //     this.loading = false;
  //     this.cdr.detectChanges();
  //   }
  // }
}
