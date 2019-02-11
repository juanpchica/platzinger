import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Services
import { UsersService } from '../services/users';
import { AuthService } from '../services/auth';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBpQukp6uwIE5ptluyzNx6oHTf_e907kXs",
  authDomain: "platzinger-644ec.firebaseapp.com",
  databaseURL: "https://platzinger-644ec.firebaseio.com",
  projectId: "platzinger-644ec",
  storageBucket: "platzinger-644ec.appspot.com",
  messagingSenderId: "264143202049"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsersService,
    AngularFireDatabase,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
