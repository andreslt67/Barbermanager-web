'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">barber-manager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' : 'data-target="#xs-components-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' :
                                            'id="xs-components-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscadorEstablecimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuscadorEstablecimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscadorPeluqueroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuscadorPeluqueroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogCitaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogCitaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogIniciarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogIniciarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogRegistrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogRegistrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogResenaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogResenaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogUpdateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EstablecimientoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstablecimientoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FavoritoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavoritoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaCitasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaCitasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaFavoritosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaFavoritosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaResenaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListaResenaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeluqueroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PeluqueroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResenaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResenaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' : 'data-target="#xs-pipes-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' :
                                            'id="xs-pipes-links-module-AppModule-632919d19f319008ff377b57e2fcd1f5"' }>
                                            <li class="link">
                                                <a href="pipes/HoraPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HoraPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PipeFavPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PipeFavPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link">AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuntenticadorJWTService.html" data-type="entity-link">AuntenticadorJWTService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioCitasService.html" data-type="entity-link">ServicioCitasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioEstablecimientosService.html" data-type="entity-link">ServicioEstablecimientosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioFavoritosService.html" data-type="entity-link">ServicioFavoritosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioFotoService.html" data-type="entity-link">ServicioFotoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioPeluquerosService.html" data-type="entity-link">ServicioPeluquerosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioResenasService.html" data-type="entity-link">ServicioResenasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServicioServicioService.html" data-type="entity-link">ServicioServicioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioAuntenticadorService.html" data-type="entity-link">UsuarioAuntenticadorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpInterceptorService.html" data-type="entity-link">HttpInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/GuardService.html" data-type="entity-link">GuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cita.html" data-type="entity-link">Cita</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CitaPelu.html" data-type="entity-link">CitaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cliente.html" data-type="entity-link">Cliente</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatosJwt.html" data-type="entity-link">DatosJwt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogDataCita.html" data-type="entity-link">DialogDataCita</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogDataPelu.html" data-type="entity-link">DialogDataPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Establecimiento.html" data-type="entity-link">Establecimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EstablecimientoBuscador.html" data-type="entity-link">EstablecimientoBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Favorito.html" data-type="entity-link">Favorito</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoritoMin.html" data-type="entity-link">FavoritoMin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Foto.html" data-type="entity-link">Foto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hora.html" data-type="entity-link">Hora</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaCitas.html" data-type="entity-link">ListaCitas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaCitasPelu.html" data-type="entity-link">ListaCitasPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaEstablecimientosBuscador.html" data-type="entity-link">ListaEstablecimientosBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaFavoritos.html" data-type="entity-link">ListaFavoritos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaFoto.html" data-type="entity-link">ListaFoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaHoras.html" data-type="entity-link">ListaHoras</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaPeluqueroBuscador.html" data-type="entity-link">ListaPeluqueroBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaResenaPelu.html" data-type="entity-link">ListaResenaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaResenas.html" data-type="entity-link">ListaResenas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaServicios.html" data-type="entity-link">ListaServicios</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Peluquero.html" data-type="entity-link">Peluquero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeluqueroBuscador.html" data-type="entity-link">PeluqueroBuscador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Persona.html" data-type="entity-link">Persona</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Resena.html" data-type="entity-link">Resena</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResenaPelu.html" data-type="entity-link">ResenaPelu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Servicio.html" data-type="entity-link">Servicio</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});