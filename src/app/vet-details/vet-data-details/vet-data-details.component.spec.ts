import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDataDetailsComponent } from './vet-data-details.component';

describe('VetDataDetailsComponent', () => {
  let component: VetDataDetailsComponent;
  let fixture: ComponentFixture<VetDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetDataDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
