import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajenuevoComponent } from './mensajenuevo/mensajenuevo.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { RegistroComponent } from './registro/registro.component';

import { RecordatorionuevoComponent } from './recordatorionuevo/recordatorionuevo.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'mensajenuevo', component: MensajenuevoComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'notificacion', component: NotificacionComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'recordatorio', component: RecordatorioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recordatorionuevo', component: RecordatorionuevoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
