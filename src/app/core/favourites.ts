import { Club } from "./clubs";
import { FavouritesList } from "./favouritesList";
import { Player } from "./players";

export class Favourites {
    name: string;
    id: number;
    favouriteId: number;

    constructor(name: string, id: number, favouriteId: number) {
        this.name = name;
        this.id = id;
        this.favouriteId = favouriteId;       
    }
}