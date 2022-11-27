import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites-list-add-form',
  templateUrl: './favourites-list-add-form.component.html',
  styleUrls: ['./favourites-list-add-form.component.css']
})
export class FavouritesListAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log('submit');
  }

}
