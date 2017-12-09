import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CrearComponent } from './crear/crear.component';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { LugaresService } from './services/lugares.service';
import { AuthService } from './services/auth.service';
import { MyGuard } from './services/my-guard.service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  { pathMatch: 'full', path: '', component: LugaresComponent },
  { pathMatch: 'full', path: 'lugares', component: LugaresComponent },
  { pathMatch: 'full', path: 'detalle/:id', component: DetalleComponent },
  { pathMatch: 'full', path: 'contacto', component: ContactoComponent },
  { pathMatch: 'full', path: 'login', component: LoginComponent },
  { pathMatch: 'full', path: 'register', component: RegisterComponent },
  { pathMatch: 'full', path: 'crear/:id', component: CrearComponent, canActivate:[MyGuard] },
];

export const firebaseConfig = {
  apiKey: "AIzaSyDFHwh0EeZ1FOHlfMqyarfN0imvO_aL9Oo",
  authDomain: "platzisquare-fe242.firebaseapp.com",
  databaseURL: "https://platzisquare-fe242.firebaseio.com",
  storageBucket: "platzisquare-fe242.appspot.com",
  messagingSenderId: "838514308481"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyCSPXrrmi_pE1Gm6rJEZsoffvmsDfPCakU '
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
  ],
  providers: [
    LugaresService,
    AuthService,
    MyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
