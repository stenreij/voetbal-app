import { Injectable } from '@angular/core';
import { ClubsService } from 'src/app/components/club/clubs.service';
import { Club } from 'src/app/core/clubs';
import { Player } from 'src/app/core/players';

@Injectable({
    providedIn: 'root',
})


export class PlayerService {
    clubsService: ClubsService = new ClubsService();
    clubs: Club[] = this.clubsService.getClubs();
    players = [
        new Player(1, 'Cristiano Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro', 35, this.clubsService.getClubById(9), 'Portugal', 92, 'ST'),
        new Player(2, 'Lionel Messi', 'Lionel Andrés Messi Cuccittini', 33, this.clubsService.getClubById(6), 'Argentina', 93, 'ST'),
        new Player(3, 'Neymar Jr', 'Neymar da Silva Santos Júnior', 29, this.clubsService.getClubById(6), 'Brazil', 90, 'RW'),
        new Player(4, 'Kylian Mbappé', 'Kylian Mbappé Lottin', 23, this.clubsService.getClubById(6), 'France', 91, 'ST'),
        new Player(5, 'Mohamed Salah', 'Mohamed Salah Ghaly', 29, this.clubsService.getClubById(8), 'Egypt', 90, 'RW'),
        new Player(6, 'Sadio Mané', 'Sadio Mané', 29, this.clubsService.getClubById(3), 'Senegal', 89, 'RW'),
        new Player(7, 'Kevin De Bruyne', 'Kevin De Bruyne', 30, this.clubsService.getClubById(4), 'Belgium', 89, 'CAM'),
        new Player(8, 'Virgil van Dijk', 'Virgil van Dijk', 30, this.clubsService.getClubById(8), 'Netherlands', 89, 'CB'),
        new Player(9, 'Brobbey', 'Brian Brobbey', 20, this.clubsService.getClubById(1), 'Netherlands', 79, 'ST'),
        new Player(10, 'Haaland', 'Erling Haaland', 21, this.clubsService.getClubById(4), 'Norway', 86, 'ST'),   
    ]

    static players: any;

    constructor() { }
    

    getPlayers() {
        return this.players;
    }
    getPlayerById(id: number){
        return this.players.find(player => player.id === id);
    }

    deletePlayer(player: Player) {
        const index = this.players.indexOf(player);
        if (index > -1) {
            this.players.splice(index, 1);
        }
    }
    addPlayer(player: Player) {
        this.players.push(player);
    }
}

