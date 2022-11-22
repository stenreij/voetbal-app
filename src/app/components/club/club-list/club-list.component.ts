import { Component, OnInit } from '@angular/core';
import { FavouritesList } from 'src/app/core/favouritesList';
import { Club } from 'src/app/core/clubs';
import { ClubsService } from '../clubs.service';
import { FavouritesListService } from '../../favourites-list/favourites-list.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubs: Club[] = [];
  favourites : FavouritesList[] = [];

  constructor(
    private favouritesListService: FavouritesListService, private clubsService: ClubsService) 
   { }

  ngOnInit(): void {
    this.favourites = this.favouritesListService.getFavouritesList();
    this.clubs = this.clubsService.getClubs();
  }

  addClub(club: Club) {

  }
}
