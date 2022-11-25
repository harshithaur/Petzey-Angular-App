import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVetDetailsComponent } from './all-vet-details.component';

describe('AllVetDetailsComponent', () => {
  let component: AllVetDetailsComponent;
  let fixture: ComponentFixture<AllVetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
