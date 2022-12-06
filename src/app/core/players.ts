import { Club } from "./clubs";

export class Player {
    id: number;
    playerName: string;
    fullName: string;
    age: number;
    club: Club;
    country: string;
    rating: number;
    position: string;

    constructor(id: number, playerName: string, fullName: string, age: number, club: Club, country: string, rating: number, position: string) {
        this.id = id;
        this.playerName = playerName;
        this.fullName = fullName;
        this.age = age;
        this.club = club;
        this.country = country;
        this.rating = rating;
        this.position = position;
    }
}
