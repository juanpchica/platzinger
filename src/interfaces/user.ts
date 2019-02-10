
//Debo poder exportar la interce
export interface User{
	nick: string;
	subnick?: string;
	age?: number;
	email: string;
	friend: boolean;
	id: any;
	avatar:string;
	status: Status
}

export enum Status {
	Online = "Disponible",
	Offline = "Desconectado",
	Away = "Ausente",
	Busy = "Ocupado",
	AppearOffline = "No molestar"
}