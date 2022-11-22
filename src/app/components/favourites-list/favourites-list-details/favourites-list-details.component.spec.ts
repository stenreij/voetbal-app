import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouritesListDetailsComponent } from './favourites-list-details.component'

describe('FavouritesListDetailsComponent', () => {
  let component: FavouritesListDetailsComponent;
  let fixture: ComponentFixture<FavouritesListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesListDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
