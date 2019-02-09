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

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		//Creo un usuario con la interfaz User
		let myUser: User = {
			nick : 'Juan Pablo',
			age: 24,
			email: 'juanpchica@hotmail.com',
			friend: true,
			uid:1
		}

		//Creo un arreglo de tipo User
		let users: User[] = [
			myUser,
			myUser
		];

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
