import { Component, OnInit } from '@angular/core';
import { clubs } from '../../../core/clubs'; 

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubs = clubs;

  constructor() { }

  ngOnInit(): void {
  }

}
