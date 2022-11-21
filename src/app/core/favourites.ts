import { Club } from "./clubs";
import { FavouritesList } from "./favouritesList";
import { Player } from "./players";

export class Favourites {
    name: Club["name"] | Player["playerName"] | undefined;
    id: Club["id"] | Player["id"] | undefined;
    description: string;

    constructor(name: Club["name"] | Player["playerName"] | undefined, id: Club["id"] | Player["id"] | undefined, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}