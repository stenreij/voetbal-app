import { Club } from "./clubs";
import { Player, players } from "./players";
import { Favourites } from "./favourites";
import { ClubsService } from "../components/club/clubs.service";

export class FavouritesList {
    name: string;
    id: number;
    description: string;
    favourites: [] = [];

    constructor(name: string, id: number, description: string) {
        this.name = name;
        this.id = id;
        this.description = description;
    }
}
