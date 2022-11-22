import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from '../../../core/clubs';
import { ClubsService } from '../clubs.service';
import { FavouritesListService } from '../../favourites-list/favourites-list.service';
import { FavouritesList } from 'src/app/core/favouritesList';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {
  clubs: Club[] = [];
  selectedClub: Club | undefined;
  favourites : FavouritesList[] = [];


  constructor(
    private route: ActivatedRoute, private ClubsService: ClubsService, private favouritesListService: FavouritesListService) { }



  ngOnInit(): void {
    this.clubs = this.ClubsService.getClubs();
    const routeParams = this.route.snapshot.paramMap;
    const clubIdFromRoute = Number(routeParams.get('clubId'));

    this.selectedClub = this.clubs.find(club => club.id === clubIdFromRoute);
    this.favourites = this.favouritesListService.getFavouritesList();
  }



}
