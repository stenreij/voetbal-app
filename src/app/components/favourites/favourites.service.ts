import { Injectable } from '@angular/core';
import { FavouritesList } from 'src/app/core/favouritesList';

@Injectable({
    providedIn: 'root',
})

export class FavouritesService {

    favouritesList = [
        new FavouritesList('Favourites 1', 1, 'Favourites 1 description'),
        new FavouritesList('Favourites 2', 2, 'Favourites 2 description'),
        new FavouritesList('Favourites 3', 3, 'Favourites 3 description'),
        new FavouritesList('Favourites 4', 4, 'Favourites 4 description'),
    ]

    constructor() {

    }

    getFavouritesList() {
        return this.favouritesList;
    }
    getFavoritesListById(id: number) {
        return this.favouritesList.find(f => f.id === id);
    }
    addFavouritesList(favourite: FavouritesList) {
        this.favouritesList.push(favourite);
    }
    deleteFavouritesList(favourite: FavouritesList) {
        const index = this.favouritesList.indexOf(favourite);
        this.favouritesList.splice(index, 1);
    }
    editFavouritesList(favourite: FavouritesList) {
        const index = this.favouritesList.indexOf(favourite);
        this.favouritesList[index] = favourite;
    }
}