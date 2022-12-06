import { Component, OnInit } from '@angular/core';
import { FavouritesList } from 'src/app/core/favouritesList';
import { Player } from 'src/app/core/players';
import { PlayerService } from '../player.service';
import { FavouritesListService } from '../../favourites-list/favourites-list.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  favourites : FavouritesList[] = [];

  constructor(private favouritesListService: FavouritesListService, private playerService: PlayerService) 
  { }

  ngOnInit(): void {
    this.favourites = this.favouritesListService.getFavouritesList();
    this.players = this.playerService.getPlayers();
  }

}
