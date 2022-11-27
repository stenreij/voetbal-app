import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesListUpdateComponent } from './favourites-list-update.component';

describe('FavouritesListUpdateComponent', () => {
  let component: FavouritesListUpdateComponent;
  let fixture: ComponentFixture<FavouritesListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesListUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
