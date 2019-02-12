import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { UsersService } from '../../services/users';

import { User, Status } from '../../interfaces/user'; ///Interfaz de usuario

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
		public authService: AuthService,
		public userService: UsersService,
		public toastCtrl:ToastController
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
		if(user.mail != '' && user.password != '' && user.passwordConfirm != ''  && user.nick != ''){
			if(user.password == user.passwordConfirm){
				//Registro el usuario
				this.authService.registerWithEmail(user.mail,user.password)
					.then((data)=>{
						
						//Si el usuario es nuevo lo creo
						if(data.additionalUserInfo.isNewUser){
							
							//Creo el nuevo usuario en la db
							const userNew : User ={
								nick: user.nick,
								email: user.mail,
								friend: true,
								status: Status.Online,
								avatar: 'assets/img/logo_live_online.png',
								id: data.user.uid
							}

							//Agrego el usuario nuevo
							this.userService.add(userNew).then(()=>{
								console.log("Usuario creado correctamente");
								
								//Creo mensaje de registro correcto
								const toast = this.toastCtrl.create({
									message: `Usuario registrado con exito`,
									duration: 3000
								});
								toast.present();
								this.navCtrl.setRoot('HomePage');

							}).catch(err=>console.log(err));

						}else{
							console.log("Este usuario ya existe");
						}
					
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
