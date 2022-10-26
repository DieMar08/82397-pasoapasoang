import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {
  NgbDatepickerModule,
  NgbModalModule,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
// ETAPA 1
import { InicioComponent } from './components/inicio/inicio.component';
// ETAPA 2
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
// ETAPA 3
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
// ETAPA 4
import { ArticulosComponent } from './components/articulos/articulos.component';
// ETAPA 8
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,

    //define a que url corresponde cada componente a mostrar
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent },
    ]),
  ],
  entryComponents: [ModalDialogComponent],

  declarations: [
    AppComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    InicioComponent,
    ModalDialogComponent,
    ArticulosComponent,
  ],

  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
