import { Club } from "./clubs";
import { FavouritesList } from "./favouritesList";
import { Player } from "./players";

export class Favourites {
    name: Club["name"] | Player["playerName"] | undefined;
    id: number;
    favouriteId: Club["id"] | Player["id"] | undefined;

    constructor(name: Club["name"] | Player["playerName"] | undefined, id: number ,favouriteId: Club["id"] | Player["id"] | undefined) {
        this.name = name;
        this.id = id;
        this.favouriteId = favouriteId;       
    }
}