
export interface Tire {
	width: string;
	height: string;
	radius: string;
 }

export interface CLientI {
	_id?: number,
	whoAddClient: string,
	registrationNumber_1: string,
	registrationNumber_2: string,
	tire_1: Tire,
	tire_2: Tire,
	carModel_1: string,
	carModel_2: string,
	phone_1: string,
	phone_2: string,
	phone_3: string,
	name: string,
	tiresValue: string,
	tiresValue_2: string,
	tiersIssueYears: string,
	character: string,
	carFlaws: string,
	tireFlawStore: string,
	dataStorage: string,
	tireBrend: string,
	tireStorage: Tire,
	tireStorage_2: Tire,
	serviceCar_1: string[],
	serviceCar_2: string[],
	endDataStorage:string,
	discount: string,
}

export interface InputDataI {
	[key: string]: string;
	whoAddClient: string,
	registrationNumber_1: string;
	registrationNumber_2: string;
	carModel_1: string;
	carModel_2: string;
	phone_1: string;
	phone_2: string;
	phone_3: string;
	name: string;
	tiersValue: string;
	tiersValue_2: string;
	discount: string;
	behavior: string,
	tiersIssueYears: string,
}

//tierStorage

export interface StokeInputData {
	[key: string]: string | number | Tire | undefined;
      tireModel: string,
		tireBrend: string,
		issueYear: string,
		counts: number | string,
		inPrice: number | string,
		outPrice: number | string,
		tireNotes: string,
		clientName: string,
		clientPhone:string,
		loadIndex: string,
		dealDate?: string
	
}

export interface TireStorageI extends StokeInputData {
	_id?: number
	tireSize: Tire,
	tireSpeed: string,
	tireOwner: string,
	
	rating: string,
}

//Sold

export interface SoldStorageI {
	_id?: number,
	tireBrend: string,
	tireModel: string,
	tireSize: Tire,
	counts: number | string,
	outPrice: number | string,
	revenue: number | string,
	soldData: string,

}