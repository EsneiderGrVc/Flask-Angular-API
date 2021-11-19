import { TestBed } from '@angular/core/testing';

import { BooksApiService } from './books-api.service';

describe('BooksApiService', () => {
  let service: BooksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
