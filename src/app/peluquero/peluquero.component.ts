import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { DialogCitaComponent } from '../dialog-cita/dialog-cita.component';
import { DialogResenaComponent } from '../dialog-resena/dialog-resena.component';
import { Hora } from '../interfaces/cita';
import { Establecimiento } from '../interfaces/establecimiento';
import { Foto } from '../interfaces/foto';
import { Peluquero } from '../interfaces/peluquero';
import { ResenaPelu } from '../interfaces/resena';
import { AlertasService } from '../servicios/alertas.service';
import { AuntenticadorJWTService } from '../servicios/auntenticador-jwt.service';
import { ServicioCitasService } from '../servicios/servicio-citas.service';
import { ServicioEstablecimientosService } from '../servicios/servicio-establecimientos.service';
import { ServicioFavoritosService } from '../servicios/servicio-favoritos.service';
import { ServicioFotoService } from '../servicios/servicio-foto.service';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';
import { ServicioResenasService } from '../servicios/servicio-resenas.service';

/**
 * Componente que se encarga de mostrar la interfaz del perfil de un peluquero.
 */
@Component({
  selector: 'app-peluquero',
  templateUrl: './peluquero.component.html',
  styleUrls: ['./peluquero.component.css']
})
export class PeluqueroComponent implements OnInit, CanActivate {

/**
 * peluquero para mostrar sus datos.
 */
  peluquero: Peluquero;
/**
 * establecimiento del peluquero.
 */
  peluqueria: Establecimiento;
/**
 * Lista de fotos del peluquero.
 */
  fotos: Array<Foto>;
/**
 * Lista de reseñas del peluquero.
 */
  resenas: Array<ResenaPelu>;
/**
 * Lista de citas según el horario del peluquero.
 */
  citas: Array<Hora>;
/**
 * guarda el idfavorito del peluquero en relacion con el cliente.
 */
  idfavorito: number = 0;
  /**
 * favorito para guardar variable temporalmente.
 */
  idfav2: number;
/**
 * variable que contiene el color de fondo del menu de pestañas.
 */
  background: ThemePalette = undefined;
/**
 * Variable que contiene el color de las pestañas.
 */
  color: ThemePalette = "warn";
/**
 * Guarda la fecha elegida en el formulario temporalmente.
 */
  fecha: Date;
/**
 * Fecha minima valida para el formulario.
 */
  minDate: Date;
/**
 * Filtro del formulario de fechas.
 */
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday from being selected.
    return day !== 0;
  }

/**
 * Metodo constructor de la clase
 *
 * @param {ServicioEstablecimientosService} servicioPeluqueria Servicio inyectado de establecimientos.
 * @param {ServicioPeluquerosService} servicioPeluquero  Servicio inyectado de peluqueros.
 * @param {ServicioResenasService} servicioResena  Servicio inyectado de reseñas.
 * @param {ServicioFavoritosService} servicioFav  Servicio inyectado de favoritos.
 * @param {ServicioFotoService} servicioFotos  Servicio inyectado de fotos.
 * @param {ActivatedRoute} rutaActiva  Obtiene los parametros de la ruta.
 * @param {MatDialog} dialog Servicio inyectado para abrir ventanas dialog.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {Router} route Servicio inyectado para la navegacion.
 * @param {AuntenticadorJWTService} servicioJWT Servicio inyectado para adminstrar los tokens.
 */
  constructor(private servicioAlertas: AlertasService, private rutaActiva: ActivatedRoute, private servicioPeluquero: ServicioPeluquerosService, private servicioResena: ServicioResenasService, private servicioCitas: ServicioCitasService, private servicioFotos: ServicioFotoService,
    private dialog: MatDialog, private servicioFav: ServicioFavoritosService, private route: Router, private servicioPeluqueria: ServicioEstablecimientosService, private servicioJWT: AuntenticadorJWTService) {
    this.fotos = new Array<Foto>();
    this.resenas = new Array<ResenaPelu>();
    this.citas = new Array<Hora>();
    this.minDate = new Date();
    this.canActivate();
   }
  
  /**
 * Metodo OnInit que se encarga de cargar los datos del peluquero al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      this.obtenerDatosPeluquero(params as Peluquero);
    });
  }

  /**
 * Metodo guardian que decide si se puede acceder o no a este componente
 * 
 * @returns Boolean true o false dependiendo si puedes acceder al componente o no
 */
  canActivate() {
    if (this.servicioJWT.recuperaJWT() == null) {
      this.route.navigate(['/']);
      this.servicioAlertas.openSnackBar("Primero Inicia sesión");
      return false;
    }
    else {
      return true;
    }
  }

  /**
 * Metodo que se encarga de comprobar si un favorito existe y devolverlo.
 */
  obtenerFavorito(id: number) {
    this.servicioFav.getFavorito(id).subscribe(data => {
      if (data != null) {
        this.idfavorito = data.idfav;
      }
    });
  }

  /**
 * Metodo que carga los datos del peluquero del servicio.
 */
  obtenerDatosPeluquero(peluquero: Peluquero) {
    this.servicioPeluquero.getPeluquero(peluquero.idpeluquero).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener datos del peluquero")
      }
      else {
        this.peluquero = data;
        this.cargarDatosResenas(this.peluquero.idpeluquero);
        this.cargarDatosFotos(this.peluquero.idpeluquero);
        this.cargarDatosPeluqueria(this.peluquero.idestablecimiento);
        this.obtenerFavorito(this.peluquero.idpeluquero);
      }
    })
  }

  /**
 * Metodo que carga los datos de reseñas en la lista de navida.
 */
  cargarDatosResenas(id: number) {
    this.resenas.splice(0, this.resenas.length);
    this.servicioResena.getResenasPelu(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener reseñas del peluquero")
      }
      else {
        data.resenas.forEach(resena => this.resenas.push(resena));
      }
    })
  }
  
  /**
 * Metodo que carga los datos de las fotos en la lista.
 */
  cargarDatosFotos(id: number) {
    this.servicioFotos.getFotos(id).subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener fotos del peluquero")
      }
      else {
        data.fotos.forEach(foto => this.fotos.push(foto));
      }
    })
  }

  /**
 * Metodo que carga los datos de la peluqueria desde el servicio.
 */
  cargarDatosPeluqueria(id: number) {
    this.servicioPeluqueria.getPeluqueria(id).subscribe(data => {
      this.peluqueria = data;
    });
  }

  /**
 * Metodo que abre una ventana dialog del componente DialogResenaComponent.
 */
  openDialogResena(): void {
    const dialogRef = this.dialog.open(DialogResenaComponent, {
      data: {
        idpelu: this.peluquero.idpeluquero
      },
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cargarDatosResenas(this.peluquero.idpeluquero);
    });
  }

  /**
 * Metodo que elimina o guarda un peluquero en favoritos del usuario
 */
  switchFavorito() {
    if (this.idfavorito != 0) {
      this.servicioFav.eliminarFavorito(this.idfavorito).subscribe(data => {
        this.servicioAlertas.openSnackBar("Ya no es favorito");
      });
      this.idfavorito = 0;
    }
    else {
      this.servicioFav.crearFavorito(this.peluquero.idpeluquero).subscribe(data => {
        this.servicioAlertas.openSnackBar("Peluquero guardado en favoritos");
        this.idfav2 = data.idfav;
      });
      this.idfavorito = this.idfav2;
    }
  }

  /**
 * Metodo que abre una ventana dialog del componente DialogCitaComponent.
 */
  obtenerCita(cita: Hora) {
    if (cita.estado == false) {
      const dialogRef = this.dialog.open(DialogCitaComponent, {
        data: {
          hora: cita.hora,
          fecha: this.fecha,
          idpelu: this.peluquero.idpeluquero
        },
        width: '250px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result == true) {
          this.citas.splice(0, this.citas.length);
          this.servicioCitas.getCitasPeluFecha(this.peluquero.idpeluquero, this.fecha).subscribe(data => {
            data.resultados.forEach(cita => this.citas.push(cita));
          });
        }
      });
    }
    else {
      this.servicioAlertas.openSnackBar("Esta cita ya esta ocupada")
    }
  }

  /**
 * Metodo que navega hacia el componente establecimiento.component.
 */
  toPeluqueria() {
    this.route.navigate(['establecimiento/peluqueria', this.peluqueria]);
  }

  /**
 * Evento que se llama al elegir una fecha en el calendario y muestra una lista de citas en funcion a la fecha elegida.
 * 
 * @param {MatDatepickerInputEvent} event evento con los datos del formulario DatePicker.
 */
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.fecha = event.value;
    this.citas.splice(0, this.citas.length);
    this.servicioCitas.getCitasPeluFecha(this.peluquero.idpeluquero, event.value).subscribe(data => {
        data.resultados.forEach(cita => this.citas.push(cita));
    });
  }

}
