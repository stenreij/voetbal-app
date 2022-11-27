import { Component, OnInit } from '@angular/core';
import { FavouritesListService } from '../favourites-list.service';
import { FavouritesList } from 'src/app/core/favouritesList';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css'],
})
export class FavouritesComponent implements OnInit {
  favourites: FavouritesList[] = [];
  
  constructor(private favouritesListService: FavouritesListService) { }

  ngOnInit(): void {
    this.favourites = this.favouritesListService.getFavouritesList();
  }

  deleteFavouritesList(favourite: FavouritesList) {
    this.favouritesListService.deleteFavouritesList(favourite);
  }
}
