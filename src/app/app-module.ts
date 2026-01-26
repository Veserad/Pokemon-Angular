import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { NavBar } from './components/nav-bar/nav-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokedex } from './pages/pokedex/pokedex';

@NgModule({
  declarations: [App, Home, NavBar, Pokedex],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
