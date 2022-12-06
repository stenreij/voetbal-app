import { Injectable } from '@angular/core';
import { Club } from 'src/app/core/clubs';

@Injectable({
    providedIn: 'root',
})

export class ClubsService {
    clubsList = [
        new Club(1, 'AFC Ajax', 'Eredivisie', 17, 'Netherlands', 'Amsterdam', 'Johan Cruijff Arena', 83),
        new Club(2, 'FC Barcelona', 'La Liga', 5, 'Spain', 'Barcelona', 'Camp Nou', 93),
        new Club(3, 'Bayern Munich', 'Bundesliga', 3, 'Germany', 'Munich', 'Allianz Arena', 89),
        new Club(4, 'Manchester City', 'Premier League', 2, 'England', 'Manchester', 'Etihad Stadium', 88),
        new Club(5, 'Juventus', 'Serie A', 8, 'Italy', 'Turin', 'Allianz Stadium', 87),
        new Club(6, 'Paris Saint-Germain', 'Ligue 1', 4, 'France', 'Paris', 'Parc des Princes', 86),
        new Club(7, 'Real Madrid', 'La Liga', 6, 'Spain', 'Madrid', 'Santiago Bernabéu', 86),
        new Club(8, 'Liverpool', 'Premier League', 1, 'England', 'Liverpool', 'Anfield', 85),
        new Club(9, 'Manchester United', 'Premier League', 12, 'England', 'Manchester', 'Old Trafford', 85),
        new Club(10, 'Borussia Dortmund', 'Bundesliga', 22, 'Germany', 'Dortmund', 'Signal Iduna Park', 84),
        new Club(11, 'Tottenham Hotspur', 'Premier League', 24, 'England', 'London', 'Tottenham Hotspur Stadium', 84),
        new Club(12, 'Atletico Madrid', 'La Liga', 7, 'Spain', 'Madrid', 'Wanda Metropolitano', 84),
        new Club(13, 'Inter Milan', 'Serie A', 9, 'Italy', 'Milan', 'San Siro', 84),
        new Club(14, 'Chelsea', 'Premier League', 10, 'England', 'London', 'Stamford Bridge', 84),
        new Club(15, 'Arsenal', 'Premier League', 11, 'England', 'London', 'Emirates Stadium', 84),
        new Club(16, 'Napoli', 'Serie A', 13, 'Italy', 'Naples', 'Stadio San Paolo', 84),
        new Club(17, 'Lazio', 'Serie A', 14, 'Italy', 'Rome', 'Olimpico', 84),
        new Club(18, 'Olympique Lyonnais', 'Ligue 1', 15, 'France', 'Lyon', 'Groupama Stadium', 84),
        new Club(19, 'RB Leipzig', 'Bundesliga', 16, 'Germany', 'Leipzig', 'Red Bull Arena', 84),
        new Club(20, 'Borussia Monchengladbach', 'Bundesliga', 18, 'Germany', 'Monchengladbach', 'Borussia-Park', 84),
        new Club(21, 'Sevilla', 'La Liga', 19, 'Spain', 'Sevilla', 'Ramón Sánchez Pizjuán', 84),
        new Club(22, 'Atalanta', 'Serie A', 20, 'Italy', 'Bergamo', 'Atleti Azzurri dItalia', 84),
        new Club(23, 'Wolfsburg', 'Bundesliga', 21, 'Germany', 'Wolfsburg', 'Volkswagen Arena', 84),
        new Club(24, 'Roma', 'Serie A', 23, 'Italy', 'Rome', 'Olimpico', 84),
        new Club(25, 'Leicester City', 'Premier League', 25, 'England', 'Leicester', 'King Power Stadium', 84),
        new Club(26, 'Everton', 'Premier League', 26, 'England', 'Liverpool', 'Goodison Park', 84),
    ]
    static clubs: any;

    constructor() {

    }

    getClubs() {
        return this.clubsList;
    }

    getClubById(id: number): Club {
        return this.clubsList.filter(club => club.id === id)[0];
    }

    addClubToFavorites(club: Club) {
        this.clubsList.push(club);
    }
}