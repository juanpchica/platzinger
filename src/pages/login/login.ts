import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	dataUser:any = {
		mail:'',
		password:''
	};

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		public authService: AuthService
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	//Envio a la pagina de registro
	goToRegister(){
		this.navCtrl.setRoot('RegisterPage');
	}

  	//Me logueo con correo y contraseña
    signIn(){
		if(this.dataUser.mail != '' && this.dataUser.password != ''){
				this.authService.loginWithEmail(this.dataUser.mail,this.dataUser.password)
				.then((data)=>{
					console.log(data);
				}).catch( err => console.log(this.errorLog(err),err) );
		}else{
			console.log("llena todos los campos");
		}
    }


	//Muestro los errores del login
	errorLog(err){
		switch (err.code) {
			case "auth/invalid-email":
				return "La dirección email es invalida";

			case "auth/user-not-found":
				return "El usuario no existe";
			
			case "auth/wrong-password":
				return "La contraseña es incorrecta";
		}
		return;
	}

}
