import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	userData:any = {
		nick:'',
		mail:'',
		password:'',
		passwordConfirm:''
	}

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		public authService: AuthService
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}
	
	goToLogin(){
		this.navCtrl.setRoot('LoginPage');
	}

	signUp(){
		let user = this.userData;
		if(user.mail != '' && user.password != '' && user.passwordConfirm != ''){
			if(user.password == user.passwordConfirm){
				//Registro el usuario
				this.authService.registerWithEmail(user.mail,user.password)
					.then((data)=>{
						console.log(data);
					})
					.catch( err => console.log(err));
			}else{
				console.log("Contraseñas no iguales");
			}
		}else{
			console.log("Campos requeridos");
		}
	}
}
