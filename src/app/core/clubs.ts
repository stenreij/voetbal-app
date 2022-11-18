export class Club {
  id: number;
  name: string;
  league: string;
  ranking: number;
  country: string;
  place: string;
  stadium: string;
  clubRating: number;

  constructor(id: number, name: string, league: string, ranking: number, country: string, place: string, stadium: string, clubRating: number) {
    this.id = id;
    this.name = name;
    this.league = league;
    this.ranking = ranking;
    this.country = country;
    this.place = place;
    this.stadium = stadium;
    this.clubRating = clubRating;
  }
}

export const clubs = [
  {
    id: 1,
    name: 'AFC Ajax',
    league: 'Eredivisie',
    ranking: 17,
    country: 'Netherlands',
    place: 'Amsterdam',
    stadium: 'Johan Cruijff Arena',
    clubRating: 84
  },
  {
    id: 2,
    name: 'FC Barcelona',
    league: 'La Liga',
    ranking: 5,
    country: 'Spain',
    place: 'Barcelona',
    stadium: 'Camp Nou',
    clubRating: 89
  },
  {
    id: 3,
    name: 'FC Bayern München',
    league: 'Bundesliga',
    ranking: 3,
    country: 'Germany',
    place: 'Munich',
    stadium: 'Allianz Arena',
    clubRating: 88
  },
  {
    id: 4,
    name: 'Manchester United',
    league: 'Premier League',
    ranking: 23,
    country: 'England',
    place: 'Manchester',
    stadium: 'Old Trafford',
    clubRating: 84
  },
  {
    id: 5,
    name: 'FC Liverpool',
    league: 'Premier League',
    ranking: 1,
    country: 'England',
    place: 'Liverpool',
    stadium: 'Anfield',
    clubRating: 87
  },
  {
    id: 6,
    name: 'Real Madrid',
    league: 'La Liga',
    ranking: 2,
    country: 'Spain',
    place: 'Madrid',
    stadium: 'Santiago Bernabéu',
    clubRating: 88
  },
  {
    id: 7,
    name: 'Juventus',
    league: 'Serie A',
    ranking: 7,
    country: 'Italy',
    place: 'Turin',
    stadium: 'Allianz Stadium',
    clubRating: 86
  },
  {
    id: 8,
    name: 'Paris Saint-Germain',
    league: 'Ligue 1',
    ranking: 4,
    country: 'France',
    place: 'Paris',
    stadium: 'Parc des Princes',
    clubRating: 86
  },
  {
    id: 9,
    name: 'Borussia Dortmund',
    league: 'Bundesliga',
    ranking: 14,
    country: 'Germany',
    place: 'Dortmund',
    stadium: 'Signal Iduna Park',
    clubRating: 84
  },
  {
    id: 10,
    name: 'Chelsea',
    league: 'Premier League',
    ranking: 6,
    country: 'England',
    place: 'London',
    stadium: 'Stamford Bridge',
    clubRating: 85
  },
  {
    id: 11,
    name: 'Manchester City',
    league: 'Premier League',
    ranking: 5,
    country: 'England',
    place: 'Manchester',
    stadium: 'Etihad Stadium',
    clubRating: 85
  },
  {
    id: 12,
    name: 'Arsenal',
    league: 'Premier League',
    ranking: 8,
    country: 'England',
    place: 'London',
    stadium: 'Emirates Stadium',
    clubRating: 84
  },
  {
    id: 13,
    name: 'Feyenoord',
    league: 'Eredivisie',
    ranking: 16,
    country: 'Netherlands',
    place: 'Rotterdam',
    stadium: 'De Kuip',
    clubRating: 83
  },
  {
    id: 14,
    name: 'FC Porto',
    league: 'Primeira Liga',
    ranking: 800,
    country: 'Portugal',
    place: 'Porto',
    stadium: 'Estádio do Dragão',
    clubRating: 83
  },
  {
    id: 15,
    name: 'FC Schalke 04',
    league: 'Bundesliga',
    ranking: 51,
    country: 'Germany',
    place: 'Gelsenkirchen',
    stadium: 'Veltins-Arena',
    clubRating: 83
  },
  {
    id: 16,
    name: 'FC Internazionale Milano',
    league: 'Serie A',
    ranking: 9,
    country: 'Italy',
    place: 'Milan',
    stadium: 'San Siro',
    clubRating: 83
  },
  {
    id: 17,
    name: 'Dynamo Kyiv',
    league: 'Ukrainian Premier League',
    ranking: 100,
    country: 'Ukraine',
    place: 'Kyiv',
    stadium: 'Olympiyskiy National Sports Complex',
    clubRating: 77
  },
  {
    id: 18,
    name: 'FC Shakhtar Donetsk',
    league: 'Ukrainian Premier League',
    ranking: 100,
    country: 'Ukraine',
    place: 'Donetsk',
    stadium: 'Donbass Arena',
    clubRating: 77
  },
  {
    id: 19,
    name: 'FC Zenit',
    league: 'Russian Premier League',
    ranking: 150,
    country: 'Russia',
    place: 'Saint Petersburg',
    stadium: 'Krestovsky Stadium',
    clubRating: 75
  },

];