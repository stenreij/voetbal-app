import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesListAddFormComponent } from './favourites-list-add-form.component';

describe('FavouritesListAddFormComponent', () => {
  let component: FavouritesListAddFormComponent;
  let fixture: ComponentFixture<FavouritesListAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesListAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesListAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
