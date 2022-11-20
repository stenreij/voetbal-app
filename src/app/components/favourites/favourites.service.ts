import { Injectable } from '@angular/core';
import { FavouritesList } from 'src/app/core/favouritesList';
import { Favourites } from 'src/app/core/favourites';

@Injectable({
    providedIn: 'root',
})

export class FavouritesService {

    favouritesList = [
        new FavouritesList('Favourites 1', 1),
        new FavouritesList('Favourites 2', 2),
        new FavouritesList('Favourites 3', 3),
    ]


    constructor() {

    }

    getFavouritesList() {
        return this.favouritesList;
    }
    addFavourite(favourite: FavouritesList) {
        this.favouritesList.push(favourite);
    }
    deleteFavourite(favourite: FavouritesList) {
        const index = this.favouritesList.indexOf(favourite);
        this.favouritesList.splice(index, 1);
    }
    editFavourite(favourite: FavouritesList) {
        const index = this.favouritesList.indexOf(favourite);
        this.favouritesList[index] = favourite;
    }
}