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

export const players = [
    {
        id: 1,
        playerName: 'L. Messi',
        fullName: 'Lionel Andrés Messi Cuccittini',
        age: 32,
        club: {
            id: 2,
            name: 'FC Barcelona'
        },
        country: 'Argentina',
        rating: 94,
        position: 'RW'
    },
    {
        id: 2,
        playerName: 'Cristiano Ronaldo',
        fullName: 'Cristiano Ronaldo dos Santos Aveiro',
        age: 34,
        club: {
            id: 4,
            name: 'Manchester United'
        },
        country: 'Portugal',
        rating: 93,
        position: 'ST'
    },
    {
        id: 3,
        playerName: 'Neymar Jr',
        fullName: 'Neymar da Silva Santos Jr',
        age: 27,
        club: {
            id: 2,
            name: 'FC Barcelona'
        },
        country: 'Brazil',
        rating: 92,
        position: 'LW'
    },
    {
        id: 4,
        playerName: 'De Gea',
        fullName: 'David de Gea Quintana',
        age: 28,
        club: {
            id: 4,
            name: 'Manchester United'
        },
        country: 'Spain',
        rating: 91,
        position: 'GK'
    },
    {
        id: 5,
        playerName: 'Haaland',
        fullName: 'Erling Haaland',
        age: 20,
        club: {
            id: 11,
            name: 'Manchester City'
        },
        country: 'Norway',
        rating: 90,
        position: 'ST'
    },
    {
        id: 6,
        playerName: 'Kenneth Taylor',
        fullName: 'Kenneth Taylor',
        age: 20,
        club: {
            id: 1,
            name: 'AFC Ajax'
        },
        country: 'Netherlands',
        rating: 79,
        position: 'CAM'
    },

];