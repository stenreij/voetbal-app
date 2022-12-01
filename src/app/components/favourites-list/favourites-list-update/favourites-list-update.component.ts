import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FavouritesList } from 'src/app/core/favouritesList';
import { FavouritesListService } from '../favourites-list.service';

@Component({
  selector: 'app-favourites-list-update',
  templateUrl: './favourites-list-update.component.html',
  styleUrls: ['./favourites-list-update.component.css'],
})

export class FavouritesListUpdateComponent implements OnInit {
  favouritesListControl = new FormControl();

  favouritesList: FavouritesList[] = [];
  selectedFavouritesList: FavouritesList | undefined;

  favouritesListUpdateForm = new FormGroup({
    listName: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const favouritesListIdFromRoute = Number(routeParams.get('favouriteListId'));
    this.favouritesList = this.FavouritesListService.getFavouritesList();

    this.selectedFavouritesList = this.favouritesList.find(favouritesList => favouritesList.id === favouritesListIdFromRoute);
  }


  constructor(private route: ActivatedRoute, private FavouritesListService: FavouritesListService) { 

  }

  deleteFavouritesList(favourite: FavouritesList) {
    this.FavouritesListService.deleteFavouritesList(favourite);
  }

  onSubmit() {
    this.selectedFavouritesList!.name = this.favouritesListUpdateForm.value.listName;
    this.selectedFavouritesList!.description = this.favouritesListUpdateForm.value.description;
    this.FavouritesListService.updateFavouritesList(this.selectedFavouritesList!);
  }

}
