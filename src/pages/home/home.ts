import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { UsersService } from '../../services/users';
import { User } from '../../interfaces/user'; ///Interfaz de usuario

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

	users:User[];
	constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersService) {
		this.initializeItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}


	verUsuario(id:number){
  		this.navCtrl.push('ConversationPage',{id:id});
	}

	// Reset items back to all of the items
	initializeItems(){
		this.users = this.usersService.getUsers();
	}

	//Filtro por usuario segun lo escrito en el buscador
	getUsers(ev){
		
		// Reset items back to all of the items
	    this.initializeItems();

	    // set val to the value of the ev target
	    var val = ev.target.value;

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.users = this.users.filter((item) => {
	        return (item.nick.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	}
}
