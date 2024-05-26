import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import Tire from '../Tire/Tire';
import InfoModal from '../../components/InfoCardModal/InfoModal';
import AlertWindow from '../../components/AlertWindow/AlertWindow';
import StoreUpdateData from '../StoreUpdateData/StoreUpdateData';
import TireCard from '../TireCard/TireCard';
import SelectForm from '../../components/SelectForm/SelectForm';
import SelectOwner from '../../components/SelectOwner/SelectOwner';
import useOpenModal from '../../hooks/useOpenModal';
//FilterTire-------------------
import { getFilteredTire } from '../../helpers/helpers';
import useOpenEditModal from '../../hooks/useOpenEditModal';
//----------------------------

const TiresList:FC = () => {

	const inputValue = useAppSelector(state => state.filterReducer.tireStoreFilter);
	const tireData = useAppSelector(state => state.tireReducer.tires);
	//FilterTire-from-helpers
	const tireFiltered = getFilteredTire(inputValue, tireData); 

	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [tireId, setTireId] = useState<number | null>(null);
	//Хук открітие - модалка для карточек!
	const {isOpen, handelModalClose, handelModalOpen} = useOpenModal();
	//Хук открітие - модалка для Edit(Update);
	const {isEditOpen, handleUpdateModalClose, handleUpdateModalOpen} = useOpenEditModal();

				//AlertWindow
			const handelAlertWindowOpen = (value: number) => {
				setIsAlertOpen(true)
				document.body.style.overflow = 'hidden';
				setTireId(value);
			}
			const handleAlertWindowClose = () => {
				setIsAlertOpen(false);
				document.body.style.overflow = 'auto';
			}
			//------------------

	
	return (
		<div className="table-box w-full">
			<div className='mb-[7px] border-b-[1px] mt-2 pb-2 flex border-slate-300 bg-slate-300 p-4 max-sm:p-1 rounded-md'>
			<SelectForm/>
			<SelectOwner/>
			</div>
		<table className='w-full'>
		<thead className='border-b-[1px] border-slate-300'>
			<tr className='text-center'>
			  <th className='pb-2 h-[33.5px]'>#</th>
			  <th className='h-[33.5px]' style={{textAlign: 'left'}}>Марка</th>
			  <th style={{textAlign: 'left'}} className='visible max-md:hidden pl-3 pr-3'>Модель</th>
			  <th>Ш/В/Р</th>
			  <th style={{textAlign: 'center'}} className='visible max-md:hidden whitespace-nowrap pl-2 pr-2'>Рік випуску</th>
			  <th style={{textAlign: 'center'}} className='visible max-md:hidden pl-3 pr-3'>Кількість</th>
			  <th style={{textAlign: 'center'}} className='visible max-md:hidden whitespace-nowrap pl-2 pr-2'>Ціна продажу</th>
			  <th style={{textAlign: 'left'}} className='visible max-sm:hidden'>Рейтинг</th>
			  <th></th>
			</tr>
		 </thead>
		 <tbody className="">
			{tireFiltered.map((item, index)=> (
				<Tire key={item.id} item={item} index={index}
				handelModalOpen={handelModalOpen}
				handleUpdateModalOpen={handleUpdateModalOpen}
				handelAlertWindowOpen={handelAlertWindowOpen}/>
			))}

		 </tbody>
		</table>
		<InfoModal isOpen={isOpen} handelModalClose={handelModalClose}>
			<TireCard isOpen={isOpen} handelModalClose={handelModalClose} />
		</InfoModal>
		<InfoModal isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}>
			<StoreUpdateData isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}/>
		</InfoModal>
		<InfoModal isOpen={isAlertOpen} handelModalClose={handleAlertWindowClose}>
				<AlertWindow clientId={tireId!} handleAlertWindowClose={handleAlertWindowClose}/>
		</InfoModal>
	</div>
	);
};

export default TiresList;