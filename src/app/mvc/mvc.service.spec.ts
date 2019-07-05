import { TestBed } from '@angular/core/testing';

import { MvcService } from './mvc.service';

describe('MvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MvcService = TestBed.get(MvcService);
    expect(service).toBeTruthy();
  });
});
