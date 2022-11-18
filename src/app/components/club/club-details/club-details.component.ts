import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club, clubs } from '../../../core/clubs';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {
  clubs = clubs;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const clubIdFromRoute = Number(routeParams.get('clubId'));

    this.club = clubs.find(
      (club) => club.id === clubIdFromRoute);
  }

  club: Club | undefined;
  constructor(
    private route: ActivatedRoute,
  ) { }

}
