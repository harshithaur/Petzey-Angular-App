import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDataDetailsComponent } from './pet-data-details.component';

describe('PetDataDetailsComponent', () => {
  let component: PetDataDetailsComponent;
  let fixture: ComponentFixture<PetDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
