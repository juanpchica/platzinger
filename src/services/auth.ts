import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import firebase from 'firebase/app'; // Importo tambien para usar facebook

@Injectable()
export class AuthService{
    constructor(private firebaseAuth: AngularFireAuth){
    }
    
    //Login usuario con email y password
    loginWithEmail(email,password){
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email,password);
    }

    registerWithEmail(email,password){
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email,password);
    }

    //Creo metodo para iniciar sesion con facebook
    loginWithFacebook(){
        return this.firebaseAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
    }

    //Obtengo el estado actual de la sesion
    getStatus(){
        return this.firebaseAuth.authState;
    }

    //Cierro la sesion
    logout(){
        return this.firebaseAuth.auth.signOut();
    }
}