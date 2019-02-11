import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";

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
}