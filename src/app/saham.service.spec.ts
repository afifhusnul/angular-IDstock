import { TestBed, inject } from '@angular/core/testing';

import { SahamService } from './saham.service';

describe('SahamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SahamService]
    });
  });

  it('should be created', inject([SahamService], (service: SahamService) => {
    expect(service).toBeTruthy();
  }));
});
