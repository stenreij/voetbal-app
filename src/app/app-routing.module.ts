import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubListComponent } from './components/club/club-list/club-list.component';
import { ClubDetailsComponent } from './components/club/club-details/club-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FavouritesComponent } from './components/favourites-list/favourites-list/favourites-list.component';
import { FavouritesListDetailsComponent } from './components/favourites-list/favourites-list-details/favourites-list-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'clublist', component: ClubListComponent },
      { path: 'clubs/:clubId', component: ClubDetailsComponent },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'favourites/:favouriteListId', component: FavouritesListDetailsComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/:userId', component: UserDetailsComponent},
    ])],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
