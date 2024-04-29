
interface Tire {
	width: string;
	height: string;
	radius: string;
 }

export interface CLientI {
	id?: number,
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
	character: number,
	carFlaws: string,
	tireFlawStore: string,
	dataStorage: string,
	tireBrend: string,
	tireStorage: Tire,
	tireStorage_2: Tire,
	serviceCar_1: string[],
	serviceCar_2: string[],
}
