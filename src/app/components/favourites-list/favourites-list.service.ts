import { Injectable } from '@angular/core';
import { Favourites } from 'src/app/core/favourites';
import { FavouritesList } from 'src/app/core/favouritesList';

@Injectable({
    providedIn: 'root',
})

export class FavouritesListService {

    favouritesList = [
        new FavouritesList('Favourites 1', 1, 'Favourites 1 description'),
        new FavouritesList('Favourites 2', 2, 'Favourites 2 description'),
        new FavouritesList('Favourites 3', 3, 'Favourites 3 description'),
        new FavouritesList('Favourites 4', 4, 'Favourites 4 description'),
        new FavouritesList('Favourites 500', 5, 'Favourites 5 description'),
    ]

    constructor() {

    }


    getFavouritesList() {
        return this.favouritesList;
    }
    getFavoritesListById(id: number) {
        return this.favouritesList.find(f => f.id === id);
    }
    deleteFavouritesList(favList: FavouritesList): void {
        this.favouritesList.splice(this.favouritesList.indexOf(favList), 1);
    }

    
    addFavouritesList(name: string, description: string): void {
        this.favouritesList.push(name && description ? new FavouritesList(name, this.favouritesList.length + 1, description) : new FavouritesList('Favourites ' + (this.favouritesList.length + 1), this.favouritesList.length + 1, 'Favourites ' + (this.favouritesList.length + 1) + ' description'));
    }
    updateFavouritesList(updatedList: FavouritesList): void {
        let updatedLists = this.favouritesList.filter(
            (f) => f.id !== updatedList.id
            );
        updatedLists.push(updatedList);
        this.favouritesList = updatedLists;
    }
}