import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { User, Status } from '../../interfaces/user'; ///Interfaz de usuario
import { UsersService } from '../../services/users';

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
		public authService: AuthService,
		public userService: UsersService,
		public toastCtrl: ToastController
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

					//let userLogged = this.userService.get(data.user.uid).valueChanges();
					//console.log(userLogged);

					//Creo mensaje de logueo correctamente
					const toast = this.toastCtrl.create({
						message: `Bienvenido de nuevo`,
						duration: 3000
					});
					toast.present();
					this.navCtrl.setRoot('HomePage');
				}).catch( err => console.log(this.errorLog(err),err) );
		}else{
			console.log("llena todos los campos");
		}
    }

	signInWithFacebook(){
		this.authService.loginWithFacebook().then((data)=>{
			console.log(data);

			//Valido si es usuario nuevo y lo registro en mi database
			if(data.additionalUserInfo.isNewUser){
				const user: User = {
					nick: data.user.displayName,
					email: data.user.email,
					id: data.user.uid,
					status: Status.Online,
					friend: true,
					avatar: data.user.photoURL
				};

				//Agrego el usuario a la base de datos
				this.userService.add(user)
					.then(data=>console.log(data))
					.catch(err=>console.log(err));

				//Creo mensaje de logueo correctamente
				const toast = this.toastCtrl.create({
					message: `Bienvenido eres nuevo usuario de facebook`,
					duration: 3000
				});
				toast.present();
				this.navCtrl.setRoot('HomePage');

			}else{
				console.log("este usuario ya existe");

				//Creo mensaje de logueo correctamente
				const toast = this.toastCtrl.create({
					message: `Bienvenido de nuevo usuario de facebook`,
					duration: 3000
				});
				toast.present();
				this.navCtrl.setRoot('HomePage');
			}
		}).catch(err=>console.log(err));
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
