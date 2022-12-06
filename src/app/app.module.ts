import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserAddFormComponent } from './components/user/user-add-form/user-add-form.component';
import { ClubListComponent } from './components/club/club-list/club-list.component';
import { ClubDetailsComponent } from './components/club/club-details/club-details.component';
import { FavouritesComponent } from './components/favourites-list/favourites-list/favourites-list.component';
import { FavouritesListDetailsComponent } from './components/favourites-list/favourites-list-details/favourites-list-details.component';
import { FavouritesListUpdateComponent } from './components/favourites-list/favourites-list-update/favourites-list-update.component';
import { FavouritesListAddFormComponent } from './components/favourites-list/favourites-list-add-form/favourites-list-add-form.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';
import { PlayerDetailsComponent } from './components/player/player-details/player-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClubListComponent,
    ClubDetailsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FavouritesComponent,
    FavouritesListDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    FavouritesListUpdateComponent,
    FavouritesListAddFormComponent,
    UserUpdateComponent,
    UserAddFormComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
