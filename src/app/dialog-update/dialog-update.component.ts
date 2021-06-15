import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { Cliente } from '../interfaces/cliente';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { UsuarioAuntenticadorService } from '../servicios/usuario-auntenticador.service';

  /**
 * Componente para actualizar usuarios.
 */
@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit, CanActivate {

    /**
 * Formulario para obtener los nuevos datos del usuario.
 */
  formLogin: FormGroup;

    /**
 * Cliente con los datos previos para mostrar en el componente.
 */
  clienteOld: Cliente;

    /**
 * boolean que determina si el tipo de input del formulario.
 */
  hide = true;

    /**
 * Metodo constructor de la clase
 *
 * @param {UsuarioAuntenticadorService} servicioUsuario  Servicio inyectado de usuarios.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioUsuario: UsuarioAuntenticadorService, private route: Router, private servicioAlertas: AlertasService, private servicioJWT: AuntenticadorJWTService, private router: Router) {
      this.formLogin = new FormGroup({
        user: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required)
      });

      this.servicioUsuario.getUsuarioAutenticado().subscribe(data => {
        this.clienteOld = data;
      });

      this.canActivate();
     }

      /**
     * Metodo que navega hacia el componente principal.component
     */
     onNoClick(): void {
      this.route.navigate(['/principal']);
    }

      /**
     * Metodo que actualiza los datos de usuario obtenidos del formulario.
     */
    updateUsuario() {
      this.servicioUsuario.updateUsuario(this.formLogin.controls.user.value, this.formLogin.controls.password.value, this.formLogin.controls.email.value, this.formLogin.controls.name.value).subscribe(data => {
          this.route.navigate(['/principal']);
          this.servicioAlertas.openSnackBar("Cliente actualizado correctamente");
      });
    }

  ngOnInit(): void {
  }

   /**
 * Metodo guardian que decide si se puede acceder o no a este componente
 * 
 * @returns Boolean true o false dependiendo si puedes acceder al componente o no
 */
  canActivate() {
    console.log(this.servicioJWT.recuperaJWT());
    if (this.servicioJWT.recuperaJWT() == null) {
      this.router.navigate(['/']);
      this.servicioAlertas.openSnackBar("Primero Inicia sesión");
      return false;
    }
    else {
      return true;
    }
  }

}
