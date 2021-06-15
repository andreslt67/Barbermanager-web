import { TestBed } from '@angular/core/testing';

import { AuntenticadorJWTService } from './auntenticador-jwt.service';

describe('AuntenticadorJWTService', () => {
  let service: AuntenticadorJWTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuntenticadorJWTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
