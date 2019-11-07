import { TestBed } from '@angular/core/testing';

import { GetItemlistService } from './get-itemlist.service';

describe('GetItemlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetItemlistService = TestBed.get(GetItemlistService);
    expect(service).toBeTruthy();
  });
});
