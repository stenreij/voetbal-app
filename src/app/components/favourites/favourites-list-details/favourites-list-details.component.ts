import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouritesList } from '../../../core/favouritesList';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-favourites-list-details',
  templateUrl: './favourites-list-details.component.html',
  styleUrls: ['./favourites-list-details.component.css']
})
export class FavouritesListDetailsComponent implements OnInit {
  FavouritesService: FavouritesService = new FavouritesService;
  Favourites = this.FavouritesService.getFavouritesList();
  selectedFavouritesList: FavouritesList | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const favouritesListIdFromRoute = Number(routeParams.get('favouriteListId'));

    this.selectedFavouritesList = this.Favourites.find(favouritesList => favouritesList.id === favouritesListIdFromRoute);
  }

  constructor(
    private route: ActivatedRoute,
  ) { }
}
