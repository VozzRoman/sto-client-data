import { FC, useState } from 'react';
import CLient from '../Client/CLient';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { CLientI } from '../../types/types';
import InfoModal from '../InfoCardModal/InfoModal';
import ClientCard from '../ClientCard/ClientCard';
import { findByIdClient, removeClient } from '../../redux/operations';
import UpdateClient from '../UpdateClient/UpdateClient';
import AlertWindow from '../AlertWindow/AlertWindow';

const getFilteredCOntacts = (inputData: string, listContact: CLientI[]) => {
	const formattedInputData = inputData.trim().toLowerCase();
	console.log(listContact);
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

const ClinetList:FC = () => {
	const inputValue = useAppSelector(state => state.filterReducer.filter);
	const clientData = useAppSelector(state => state.clientReducer.clients);

	const filteredClients = getFilteredCOntacts(inputValue, clientData);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [clientId, setClientId] = useState<number | null>(null);


	const dispatch = useAppDispatch();
		//InfoModalOpen-----
		const handelModalOpen = (value: number) => {
			console.log(value);
			setIsOpen(true);
			dispatch(findByIdClient(String(value)))	
		}
		const handelModalClose = () => {
			setIsOpen(false);
		}
		//------------------
		//AlertWindow
		const handelAlertWindowOpen = (value: number) => {
			dispatch(findByIdClient(String(value)))
			setIsAlertOpen(true)
			setClientId(value);
		}
		const handleAlertWindowClose = () => {
			setIsAlertOpen(false);
		}
		//------------------
		//UpdateModalOpen--------
		const handleUpdateModalOpen = (value: number) => {
			setIsEditOpen(true);
			dispatch(findByIdClient(String(value)))	
		}
		const handleUpdateModalClose = () => {
			setIsEditOpen(false);
		}
		const handleDelte = (value: number) => {
			console.log(value)
			if (value!== undefined) {
				dispatch(removeClient(String(value)));
			 }
		}

	return (
		<div className="table-box">
		<table className="table">
		<thead>
			<tr>
			  <th scope="col">#</th>
			  <th align="center" scope="col">Номер авто</th>
			  <th scope="col">Назва авто</th>
			  <th scope="col">Радіус</th>
			  <th scope="col">Телефон</th>
			  <th scope="col">Ім'я</th>
			  <th scope="col">Як людина</th>
			  <th scope="col"></th>
			</tr>
		 </thead>
		 <tbody className="">
			{filteredClients.map((item, index) => {
					return <CLient key={index} 
					item={item} index={index} 
					handleDelte={handleDelte} 
					handelModalOpen={handelModalOpen} 
					handleUpdateModalOpen={handleUpdateModalOpen} 
					handelAlertWindowOpen={handelAlertWindowOpen}/>
			})}
		 </tbody>
		</table>
		<InfoModal isOpen={isOpen} handelModalClose={handelModalClose}>
			<ClientCard isOpen={isOpen} handelModalClose={handelModalClose} />
		</InfoModal>
		<InfoModal isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}>
			<UpdateClient isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}/>
		</InfoModal>
		<InfoModal isOpen={isAlertOpen} handelModalClose={handleAlertWindowClose}>
				<AlertWindow clientId={clientId!} handleAlertWindowClose={handleAlertWindowClose}/>
		</InfoModal>
	</div>
	);
};

export default ClinetList;