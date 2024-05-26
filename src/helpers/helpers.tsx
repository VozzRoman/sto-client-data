import { CLientI, TireStorageI } from "../types/types";

//ClientsFilter--------------------------
export const getFilteredCOntacts = (inputData: string, listContact: CLientI[]) => {
	const formattedInputData = inputData.trim().toLowerCase();
	
  return listContact.filter(item => 
	item.registrationNumber_1.toLocaleLowerCase().includes(formattedInputData) ||
	item.registrationNumber_2.toLocaleLowerCase().includes(formattedInputData) ||
	item.carModel_1.toLocaleLowerCase().includes(formattedInputData) ||
	item.carModel_2.toLocaleLowerCase().includes(formattedInputData) ||
	item.phone_1.toLocaleLowerCase().includes(formattedInputData) ||
	item.phone_2.toLocaleLowerCase().includes(formattedInputData) ||
	item.phone_3.toLocaleLowerCase().includes(formattedInputData) ||
	item.name.toLocaleLowerCase().includes(formattedInputData)
	);
};

//TireFIlter
interface TrieSize {
	width: string,
	height: string,
	radius: string,
}
export const getFilteredTire = (inputData: string | TrieSize , listContact: TireStorageI[]) => {
	if(typeof inputData === 'string'){
		const formattedInputData = inputData.trim().toLowerCase();
		return listContact.filter(item => 
		 item.tireModel.toLocaleLowerCase().includes(formattedInputData) ||
		 item.tireBrend.toLocaleLowerCase().includes(formattedInputData) ||
		 item.rating.toLocaleLowerCase().includes(formattedInputData) ||
		 item.tireSize.width.toLocaleLowerCase().includes(formattedInputData) ||
		 item.tireSize.height.toLocaleLowerCase().includes(formattedInputData) ||
		 item.tireSize.radius.toLocaleLowerCase().includes(formattedInputData) ||
		 item.tireOwner.toLocaleLowerCase().includes(formattedInputData)
		 
		 );
	
	}
	if(typeof inputData === 'object'){
		return listContact.filter(item => 
		 item.tireSize.width.toLocaleLowerCase().includes(inputData.width) &&
		 item.tireSize.height.toLocaleLowerCase().includes(inputData.height) &&
		 item.tireSize.radius.toLocaleLowerCase().includes(inputData.radius) 
		 )
	}
	return listContact;

};