import {Injectable} from "@angular/core";
import { User } from '../interfaces/user'; ///Interfaz de usuario


@Injectable()
export class UsersService{
	
	//Creo un usuario con la interfaz User
	users: User[] = [
		{
			nick : 'Juan Pablo',
			age: 24,
			email: 'juanpchica@hotmail.com',
			friend: true,
			id:1
		},
		{
			nick : 'Luis Felipe',
			age: 27,
			email: 'pipe@hotmail.com',
			friend: true,
			id:2
		},
		{
			nick : 'Nicolas',
			age: 10,
			email: 'nico@hotmail.com',
			friend: false,
			id:3
		},
		{
			nick : 'Fernando',
			age:52,
			email: 'fernando@hotmail.com',
			friend: true,
			id:4
		},
		{
			nick : 'Martha',
			age: 45,
			email: 'martha@hotmail.com',
			friend: false,
			id:5
		}
	];

	constructor(){}

	//Retorno los usuarios
	getUsers(){
		return this.users;
	}

	getUser(id:number){
		return this.getUsers().find( item => item.id == id );
	}
}