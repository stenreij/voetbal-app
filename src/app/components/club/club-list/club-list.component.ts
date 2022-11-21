import { Component, OnInit } from '@angular/core';
import { clubs } from '../../../core/clubs'; 
import { FavouritesService } from '../../favourites/favourites.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubs = clubs;
  favouritesService: FavouritesService = new FavouritesService();
  favouritesList = this.favouritesService.favouritesList;

  constructor() { }

  ngOnInit(): void {
  }


}
