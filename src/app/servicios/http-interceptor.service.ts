import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize} from 'rxjs/operators';
import { AuntenticadorJWTService } from './auntenticador-jwt.service';

/**
 * Servicio que contiene un http interceptor
 */
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

/**
 * url de la api del backend
 */
  urlWebAPI = 'http://localhost:8080';

  /**
 * Metodo constructor de la clase
 *
 * @param {AuntenticadorJWTService} autenticadorJwt Servicio inyectado para adminstrar los tokens.
 */
  constructor( private autenticadorJwt: AuntenticadorJWTService) { }
  
  /**
 * Intercepta las peticiones al servidor y le inserta contenido.
 *
 * @param {HttpRequest} request  Request de la peticion.
 * @param {HttpHandler} next HttpHandler.
 * @returns Un Observable con un HttpEvent
 */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.autenticadorJwt.recuperaJWT();  
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }  

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') }); //para el error del origen cruzado

    const newUrl = {url: this.urlWebAPI + request.url};
    request = Object.assign(request, newUrl);
    const newUrlWithParams = {urlWithParams: this.urlWebAPI + request.urlWithParams};
    request = Object.assign(request, newUrlWithParams);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      finalize(() => {
       })
      );
  }
}
