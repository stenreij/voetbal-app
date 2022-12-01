import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ClubListComponent } from './components/club/club-list/club-list.component';
import { ClubDetailsComponent } from './components/club/club-details/club-details.component';
import { AboutComponent } from './components/about/about.component';
import { FavouritesComponent } from './components/favourites-list/favourites-list/favourites-list.component';
import { FavouritesListDetailsComponent } from './components/favourites-list/favourites-list-details/favourites-list-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { FavouritesListUpdateComponent } from './components/favourites-list/favourites-list-update/favourites-list-update.component';
import { FavouritesListAddFormComponent } from './components/favourites-list/favourites-list-add-form/favourites-list-add-form.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserAddFormComponent } from './components/user/user-add-form/user-add-form.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'clublist', component: ClubListComponent },
      { path: 'clubs/:clubId', component: ClubDetailsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'favouriteslist', component: FavouritesComponent },
      { path: 'favouriteslist/:favouriteListId', component: FavouritesListDetailsComponent },
      { path: 'favouriteslist/:favouriteListId/update', component: FavouritesListUpdateComponent},
      { path: 'favouriteslist/add/form', component: FavouritesListAddFormComponent},
      { path: 'users', component: UserListComponent },
      { path: 'users/:userId', component: UserDetailsComponent},
      { path: 'users/:userId/update', component: UserUpdateComponent},
      { path: 'users/add/form', component: UserAddFormComponent},
      
    ])],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
