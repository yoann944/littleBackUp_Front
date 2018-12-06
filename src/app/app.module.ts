import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";

import { HttpProvidersService } from './services/user.service';
import { UserService } from './services/node/user.service';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StreamBroardComponent } from './stream-broard/stream-broard.component';
import { DrawBoardComponent } from './draw-board/draw-board';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReplayComponent } from './replay/replay.component';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';
import { CoursComponent } from './cours/cours.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const appRoutes: Routes = [
  { path: 'dashBoard', component: DashBoardComponent },
  { path: 'streamBoard', component: StreamBroardComponent },
  { path: 'drawBoard', component: DrawBoardComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'replay', component: ReplayComponent },
  { path: 'modifProfil', component: ModifProfilComponent },
  { path: 'subscribe', component: SubscribeComponent },


];

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDn69gLW3rdjm9a_8DzfRspHnNxkRTQIl4",
    authDomain: "streamapp-a238e.firebaseapp.com",
    databaseURL: "https://streamapp-a238e.firebaseio.com",
    projectId: "streamapp-a238e",
    storageBucket: "",
    messagingSenderId: "273871627191"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    StreamBroardComponent,
    DrawBoardComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    ReplayComponent,
    ModifProfilComponent,
    CoursComponent,
    SubscribeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),

    AngularFirestoreModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpProvidersService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
