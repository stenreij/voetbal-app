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

