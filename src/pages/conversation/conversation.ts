import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersService } from '../../services/users';
import { User } from '../../interfaces/user'; ///Interfaz de usuario


/**
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

	user: User;

	constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
		
		//Obtengo el usuario seleccionado
		this.user = usersService.getUser(navParams.get('id'));
		console.log(this.user);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ConversationPage');
	}



}
