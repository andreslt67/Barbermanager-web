import { TestBed } from '@angular/core/testing';

import { ServicioFavoritosService } from './servicio-favoritos.service';

describe('ServicioFavoritosService', () => {
  let service: ServicioFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
