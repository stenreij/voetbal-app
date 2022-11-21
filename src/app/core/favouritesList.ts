import { Club } from "./clubs";
import { Player } from "./players";
import { Favourites } from "./favourites";

export class FavouritesList {
    name: string;
    id: number;
    description: string;
    favourites: [] = [];

    constructor(name: string, id: number, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.favourites = [];
    }
}
