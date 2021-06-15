import { TestBed } from '@angular/core/testing';

import { ServicioPeluquerosService } from './servicio-peluqueros.service';

describe('ServicioPeluquerosService', () => {
  let service: ServicioPeluquerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPeluquerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
