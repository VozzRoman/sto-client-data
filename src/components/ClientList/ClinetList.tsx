import { FC, useState } from 'react';
import CLient from '../Client/CLient';
import { useAppSelector } from '../../hooks/reduxHooks';
import InfoModal from '../InfoCardModal/InfoModal';
import ClientCard from '../ClientCard/ClientCard';
import UpdateClient from '../UpdateClient/UpdateClient';
import AlertWindow from '../AlertWindow/AlertWindow';
////ClientsFulilter--------------------------
import { getFilteredCOntacts } from '../../helpers/helpers';
import useOpenModal from '../../hooks/useOpenModal';
import useOpenEditModal from '../../hooks/useOpenEditModal';
//-------------------------------------------

const ClinetList:FC = () => {
	const inputValue = useAppSelector(state => state.filterReducer.filter);
	const clientData = useAppSelector(state => state.clientReducer.clients);
	
	const filteredClients = getFilteredCOntacts(inputValue, clientData);
	//Хук открітие - модалка для карточек!
	const {isOpen, handelModalClose, handelModalOpen} = useOpenModal();
	//Хук открітие - модалка для  Edit(Update);
	const {isEditOpen, handleUpdateModalClose, handleUpdateModalOpen} = useOpenEditModal();
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [clientId, setClientId] = useState<number | null>(null);


		//AlertWindow
		const handelAlertWindowOpen = (value: number) => {
			setIsAlertOpen(true)
			document.body.style.overflow = 'hidden';
			setClientId(value);
		}
		const handleAlertWindowClose = () => {
			setIsAlertOpen(false);
			document.body.style.overflow = 'auto';
		}



	return (
		<div className="table-box w-full">
		<table className="w-full">
		<thead className='border-b-[1px] border-slate-300'>
			<tr>
			  <th className='pb-2 h-[33.5px]'>#</th>
			  <th className='h-[33.5px] whitespace-nowrap max-sm:hidden visible' style={{textAlign: 'left'}}>Номер <span className='max-sm:hidden visible' >авто</span></th>
			  <th className='visible max-md:hidden pl-3 pr-3' style={{textAlign: 'left'}}>Назва авто</th>
			  <th className='visible max-md:hidden pl-3 pr-3' >Радіус</th>
			  <th style={{textAlign: 'left'}}>Телефон</th>
			  <th className='visible max-md:hidden pl-3 pr-3' style={{textAlign: 'left'}}>Ім'я</th>
			  <th className='whitespace-nowrap' style={{textAlign: 'left'}}>Як людина</th>
			  <th ></th>
			</tr>
		 </thead>
		 <tbody className="">
			{filteredClients.map((item, index) => {
					return <CLient key={index} 
					item={item} index={index} 
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