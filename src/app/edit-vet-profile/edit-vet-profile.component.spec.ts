import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVetProfileComponent } from './edit-vet-profile.component';

describe('EditVetProfileComponent', () => {
  let component: EditVetProfileComponent;
  let fixture: ComponentFixture<EditVetProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVetProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
