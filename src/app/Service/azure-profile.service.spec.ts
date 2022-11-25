import { TestBed } from '@angular/core/testing';

import { AzureProfileService } from './azure-profile.service';

describe('AzureProfileService', () => {
  let service: AzureProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
