import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../interfaces/user';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	users: User[]; //Instancio mi variable de usuario para poder que sea alcanzable por todo el scope

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		//Creo un usuario con la interfaz User
		let user1: User = {
			nick : 'Juan Pablo',
			age: 24,
			email: 'juanpchica@hotmail.com',
			friend: true,
			uid:1
		}

		let user2: User = {
			nick : 'Luis Felipe',
			age: 27,
			email: 'pipe@hotmail.com',
			friend: true,
			uid:2
		}

		let user3: User = {
			nick : 'Nicolas',
			age: 10,
			email: 'nico@hotmail.com',
			friend: false,
			uid:3
		}

		let user4: User = {
			nick : 'Fernando',
			age:52,
			email: 'fernando@hotmail.com',
			friend: true,
			uid:4
		}

		let user5: User = {
			nick : 'Martha',
			age: 45,
			email: 'martha@hotmail.com',
			friend: false,
			uid:5
		}

		//Creo un arreglo con todos los usuarios
		this.users = [user1,user2,user3,user4,user5];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
