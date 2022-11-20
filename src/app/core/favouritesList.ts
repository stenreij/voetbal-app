import { Club } from "./clubs";
import { Favourites } from "./favourites";

export class FavouritesList {
    name: string;
    id: number;
    favourites: [] = [];


    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.favourites = [];
    }
}

export class Favourite {
    name: string;
    id: number;
    club: Club;

    constructor(name: string, id: number, club: Club) {
        this.name = name;
        this.id = id;
        this.club = club;
    }
}