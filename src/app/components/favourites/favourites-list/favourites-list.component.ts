import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesComponent implements OnInit {
  favouritesService: FavouritesService = new FavouritesService();
  favouritesList = this.favouritesService.favouritesList;
  constructor() { }

  ngOnInit(): void {
  }

}
