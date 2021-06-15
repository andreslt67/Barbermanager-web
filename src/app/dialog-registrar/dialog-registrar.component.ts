import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from '../servicios/alertas.service';
import { UsuarioAuntenticadorService } from '../servicios/usuario-auntenticador.service';

  /**
 * Componente para registrar usuarios en la bbdd
 */
@Component({
  selector: 'app-dialog-registrar',
  templateUrl: './dialog-registrar.component.html',
  styleUrls: ['./dialog-registrar.component.css']
})
export class DialogRegistrarComponent implements OnInit {

  /**
 * Formulario para obtener los datos del usuario.
 */
  formLogin: FormGroup;
    /**
 * boolean que determina el tipo de un campo del formulario
 */
  hide: boolean = true;
    /**
 * boolean que comprueba si dos contraseñas coinciden
 */
  valid: boolean = true;

    /**
 * Metodo constructor de la clase
 *
 * @param {UsuarioAuntenticadorService} servicioUsuario  Servicio inyectado de usuarios.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 */
  constructor(private servicioUsuario: UsuarioAuntenticadorService, private router: Router, private servicioAlertas: AlertasService) {
      this.formLogin = new FormGroup({
        user: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        passwordRepeat: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required)
      });
     }

    /**
   * Metodo para navegar al componente inicio.component
   */
    onNoClick(): void {
      this.router.navigate(['/inicio'])
    }

    /**
   * Metodo para registrar usuarios en la bbdd si los datos son correctos.
   */
    registraUsuario() {
      if (this.formLogin.controls.password.value != this.formLogin.controls.passwordRepeat.value) {
        this.valid = false;
        this.servicioAlertas.openSnackBar("Las contraseñas deben coincidir");
      }
      else {
        this.valid = true;
        this.servicioUsuario.registrarUsuario(this.formLogin.controls.user.value,
          this.formLogin.controls.password.value, this.formLogin.controls.email.value, this.formLogin.controls.name.value).then(data => {
            this.router.navigate(['/inicio']);
            this.servicioAlertas.openSnackBar("Usuario registrado con éxito");
          }).catch(error => { 
            this.servicioAlertas.openSnackBar('Error al registrar el usuario puede que el email o el nombre de usuario ya existan');
          });
      }
    }

  ngOnInit(): void {
  }

}
