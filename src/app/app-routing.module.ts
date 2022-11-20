import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubListComponent } from './components/club/club-list/club-list.component';
import { ClubDetailsComponent } from './components/club/club-details/club-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FavouritesComponent } from './components/favourites/favourites.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'clublist', component: ClubListComponent },
      { path: 'clubs/:clubId', component: ClubDetailsComponent },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'favourites', component: FavouritesComponent },
    ])],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
