import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { UsuarioAuntenticadorService } from '../servicios/usuario-auntenticador.service';

/**
 * Componente dialog para iniciar sesión.
 */
@Component({
  selector: 'app-dialog-iniciar',
  templateUrl: './dialog-iniciar.component.html',
  styleUrls: ['./dialog-iniciar.component.css']
})
export class DialogIniciarComponent implements OnInit {

  /**
 * Formulario para obtener los datos del usuario.
 */
  formLogin: FormGroup;

    /**
 * Metodo constructor de la clase
 *
 * @param {MatDialogRef} dialogRef  Servicio que hace referencia a la ventana dialog.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 * @param {UsuarioAuntenticadorService} servicioUsuario Servicio inyectado de usuarios.
 */
  constructor(
    public dialogRef: MatDialogRef<DialogIniciarComponent>, private servicioUsuario: UsuarioAuntenticadorService,
    private auntenticadorJWT: AuntenticadorJWTService, private router: Router, private servicioAlertas: AlertasService) {
      this.formLogin = new FormGroup({
        user: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }

  /**
 * Metodo para cerrar la ventana dialog.
 */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

    /**
 * Metodo que comprueba los datos del usuario y si son correctos te lleva al componente principal.component
 */
  autenticaUsuario() {
    this.servicioUsuario.autenticaUsuario(this.formLogin.controls.user.value,
      this.formLogin.controls.password.value).then(data => {
        if (data.jwt != undefined) {
          this.auntenticadorJWT.almacenaJWT(data.jwt);
          this.router.navigate(['/principal']);
          this.dialogRef.close(true);
        }
        else {
          this.servicioAlertas.openSnackBar("Usuario y/o password incorrectos");
        }
      }).catch(error => { 
        this.servicioAlertas.openSnackBar('Error en acceso al servidor');
      });
  }

  ngOnInit(): void {
  }

}
