import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pokedex } from './pages/pokedex/pokedex';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'pokedex', component: Pokedex },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
