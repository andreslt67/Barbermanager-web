import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogIniciarComponent } from '../dialog-iniciar/dialog-iniciar.component';
import { Cliente } from '../interfaces/cliente';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { UsuarioAuntenticadorService } from '../servicios/usuario-auntenticador.service';
import { MatSidenav } from '@angular/material/sidenav';

/**
 * Componente barra superior de navegacion
 */
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  /**
 * Token jwt de usuario
 */
  token: string;

  /**
 * usuario auntenticado
 */
  clienteAuntenticado: Cliente;

  /**
 * Navegador lateral obtenido del padre
 */
  @Input('drawer') drawer: MatSidenav;

  /**
 * Metodo constructor de la clase
 *
 * @param {UsuarioAuntenticadorService} servicioUsuario  Servicio inyectado de usuarios.
 * @param {MatDialog} dialog Servicio inyectado de de ventanas dialog.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} auntenticaJwt Servicio inyectado para adminstrar los tokens.
 */
  constructor(private dialog: MatDialog, private auntenticaJwt: AuntenticadorJWTService, private route: Router, private servicioUsuario: UsuarioAuntenticadorService) { 
  }

  /**
 * Metodo OnInit que se encarga de obtener el token y el usuario auntenticado al estar listos los componentes angular.
 */
  ngOnInit(): void {
    this.obtenerCliente();
    this.token = this.auntenticaJwt.recuperaJWT();
  }

  /**
 * Metodo que se encarga de obtener un usuario auntenticado.
 */
  obtenerCliente() {
    this.servicioUsuario.getUsuarioAutenticado().subscribe(data => {
      this.clienteAuntenticado = data;
    });
  }

  /**
 * Metodo que se encarga de abrir una ventana dialog del componente DialogIniciarComponent.
 */
  openDialogIniciar(): void {
    const dialogRef = this.dialog.open(DialogIniciarComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.token = this.auntenticaJwt.recuperaJWT();
        this.obtenerCliente();
      }
      console.log('The dialog was closed');
    });
  }

    /**
 * Metodo que se encarga de navegar al componente dialog-registra.component.
 */
  openDialogRegistrar(): void {
    this.route.navigate(['/registrar']);
  }

    /**
 * Metodo que navega hacia el componente dialog-update.component.
 */
  toPerfil(): void {
    this.route.navigate(['/perfil']);
  }

    /**
 * Metodo que se encarga de eliminar el token del usuario y despues navegar hacia el componente inicio.component.
 */
  cerrarSesion() {
    this.auntenticaJwt.eliminaJWT();
    this.token = this.auntenticaJwt.recuperaJWT();
    this.route.navigate(['/inicio']);
  }

}
