import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { UsersService } from '../../services/users';

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

	users:any;
	constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
		this.users = usersService.getUsers();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}


	verUsuario(id:number){
  		this.navCtrl.push('ConversationPage',{id:id});
	}
}
