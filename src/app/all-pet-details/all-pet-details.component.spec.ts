import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetDetailsComponent } from './all-pet-details.component';

describe('AllPetDetailsComponent', () => {
  let component: AllPetDetailsComponent;
  let fixture: ComponentFixture<AllPetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
