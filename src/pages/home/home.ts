import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, AlertController } from 'ionic-angular';


import { UsersService } from '../../services/users';
import { User, Status } from '../../interfaces/user'; ///Interfaz de usuario

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
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		public usersService: UsersService,
		public alertCtrl: AlertController
	) {
		this.initializeItems();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

	goToConversation(id:number){
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

	//Agrego usuario a los amigos
	addUser(user:User){
		user.friend = true;
	}

	//Borro usuario de mis amigos
	deleteUser(user:User,slideItem:ItemSliding){
		const confirm = this.alertCtrl.create({
			title: 'Eliminar Amigo?',
			message: 'Estas seguro que deseas eliminar de tus amigos a '+ user.nick+' ?',
			buttons: [
				{
					text: 'Cancelar',
						handler: () => {

						//Cierro el slideItem que abrí
						slideItem.close();
					}
				},
				{
					text: 'Elminar',
						handler: () => {

						//Ya no es amigo
						user.friend = false;
					}
				}
			]
	    });
	    confirm.present();
	}

	//Valido el nombre de la imagen segun el estado del usuario
	getImageStatus(status: Status){
		let icon:string = '';

		switch (status) {
			case Status.AppearOffline:
					icon = "logo_live_appear_offline";
				break;
				
			case Status.Away:
					icon = "logo_live_away";
				break;

			case Status.Busy:
					icon = "logo_live_busy";
				break;

			case Status.Offline:
					icon = "logo_live_offline";
				break;

			case Status.Online:
					icon = "logo_live_online";
				break;
		}
		return icon;
	}

}
