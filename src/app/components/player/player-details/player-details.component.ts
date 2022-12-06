import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/core/players';
import { PlayerService } from '../player.service';
import { FavouritesListService } from '../../favourites-list/favourites-list.service';
import { FavouritesList } from 'src/app/core/favouritesList';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  players= this.playerService.players;
  favourites : FavouritesList[] = [];
  selectedPlayer: Player | undefined;;
  

  constructor(
    private route: ActivatedRoute, 
    private playerService: PlayerService, 
    private favouritesListService: FavouritesListService) { }

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
    const routeParams = this.route.snapshot.paramMap;
    const playerIdFromRoute = Number(routeParams.get('playerId'));

    this.selectedPlayer = this.players.find(player => player.id === playerIdFromRoute);
    this.favourites = this.favouritesListService.getFavouritesList();
  }

}
