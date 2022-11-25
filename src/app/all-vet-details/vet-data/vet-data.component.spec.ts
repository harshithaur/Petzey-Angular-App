import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDataComponent } from './vet-data.component';

describe('VetDataComponent', () => {
  let component: VetDataComponent;
  let fixture: ComponentFixture<VetDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
