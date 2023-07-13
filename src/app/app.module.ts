import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { MensajenuevoComponent } from './mensajenuevo/mensajenuevo.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
import { RegistroComponent } from './registro/registro.component';

import { RecordatorionuevoComponent } from './recordatorionuevo/recordatorionuevo.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { ReactiveFormsModule} from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioComponent,
    MensajenuevoComponent,
    MensajesComponent,
    NotificacionComponent,
    PerfilComponent,
    RecordatorioComponent,
    RegistroComponent,

    RecordatorionuevoComponent,
  ],
  imports: [BrowserModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth())
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
