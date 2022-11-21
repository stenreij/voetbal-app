import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { Favourites } from '../../../core/favourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: Favourites[] = [];
  
  constructor(private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.favourites = this.favouritesService.getFavouritesList();
  }

}
