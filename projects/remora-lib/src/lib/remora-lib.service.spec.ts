import { TestBed } from '@angular/core/testing';

import { RemoraLibService } from './remora-lib.service';

describe('RemoraLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoraLibService = TestBed.get(RemoraLibService);
    expect(service).toBeTruthy();
  });
});
