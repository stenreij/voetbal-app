import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FavouritesListService } from '../favourites-list.service';

@Component({
  selector: 'app-favourites-list-add-form',
  templateUrl: './favourites-list-add-form.component.html',
  styleUrls: ['./favourites-list-add-form.component.css']
})
export class FavouritesListAddFormComponent implements OnInit {
  
  favouritesListForm = new FormGroup({
    listName: new FormControl(),
    description: new FormControl(),
  });

  constructor(private favouritesListService: FavouritesListService) { }

  ngOnInit(): void {
  }

  addFavouritesList() {
    this.favouritesListService.addFavouritesList(this.favouritesListForm.value.listName, this.favouritesListForm.value.description);
  } 
}
