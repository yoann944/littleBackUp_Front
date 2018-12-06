import { TestBed, inject } from '@angular/core/testing';

import { HttpProvidersService } from './user.service';

describe('HttpProvidersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProvidersService]
    });
  });

  it('should be created', inject([HttpProvidersService], (service: HttpProvidersService) => {
    expect(service).toBeTruthy();
  }));
});
