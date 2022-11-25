import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetDataComponent } from './add-pet-data.component';

describe('AddPetDataComponent', () => {
  let component: AddPetDataComponent;
  let fixture: ComponentFixture<AddPetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
