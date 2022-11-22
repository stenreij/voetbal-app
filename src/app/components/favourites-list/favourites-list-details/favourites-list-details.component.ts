import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouritesList } from '../../../core/favouritesList';
import { FavouritesListService } from '../favourites-list.service';
import { Favourites } from '../../../core/favourites';


@Component({
  selector: 'app-favourites-list-details',
  templateUrl: './favourites-list-details.component.html',
  styleUrls: ['./favourites-list-details.component.css']
})
export class FavouritesListDetailsComponent implements OnInit {
  favouritesList: FavouritesList[] = [];
  favItems: Favourites[] | undefined;
  selectedFavouritesList: FavouritesList | undefined;

  ngOnInit(): void {
    this.favItems = [];
    this.favouritesList = this.FavouritesListService.getFavouritesList();
    const routeParams = this.route.snapshot.paramMap;
    const favouritesListIdFromRoute = Number(routeParams.get('favouriteListId'));

    this.selectedFavouritesList = this.favouritesList.find(favouritesList => favouritesList.id === favouritesListIdFromRoute);
    this.favItems = this.selectedFavouritesList?.favourites;
  }

  constructor(
    private route: ActivatedRoute, private FavouritesListService: FavouritesListService) { }

  deleteFavouritesList(favourites: FavouritesList) {
    this.FavouritesListService.deleteFavouritesList(favourites);
  }

}
