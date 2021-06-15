import { Component, OnInit } from '@angular/core';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';

/**
 * Componente con ventana de inicio de la web.
 */
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

    /**
 * Metodo constructor de la clase
 *
 * @param {AuntenticadorJWTService} auntenticaJwt Servicio inyectado para adminstrar los tokens.
 */
  constructor(private auntenticaJwt: AuntenticadorJWTService) { 
  }

  ngOnInit(): void {
  }

  /**
 * Metodo afterViewInit que se encarga de eliminar el token cada vez que se accede al componente.
 */
  ngAfterViewInit(): void {
    this.auntenticaJwt.eliminaJWT();
  }

}
