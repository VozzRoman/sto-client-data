import { FC, useCallback, useState } from 'react';
import CLient from '../Client/CLient';
import { useAppSelector } from '../../hooks/reduxHooks';
import InfoModal from '../InfoCardModal/InfoModal';
import ClientCard from '../ClientCard/ClientCard';
import UpdateClient from '../UpdateClient/UpdateClient';
import AlertWindow from '../AlertWindow/AlertWindow';
////ClientsFillter--------------------------
import { getFilteredCOntacts } from '../../helpers/helpers';
import useOpenModal from '../../hooks/useOpenModal';
import useOpenEditModal from '../../hooks/useOpenEditModal';
import Loader from '../Loader/Loader';
import RebootRequestBth from '../RebootRequestBth/RebootRequestBth';
import { MdExpandMore } from "react-icons/md";
//-------------------------------------------

const ClinetList:FC = () => {
	const inputValue = useAppSelector(state => state.filterReducer.filter);
	const clientData = useAppSelector(state => state.clientReducer.clients);
	const isLoading = useAppSelector(state => state.clientReducer.isLoading);
	const isError = useAppSelector(state => state.clientReducer.error);
	const filteredClients = getFilteredCOntacts(inputValue, clientData);
	//Хук открітие - модалка для карточек!
	const {isOpen, handelModalClose, handelModalOpen} = useOpenModal();
	//Хук открітие - модалка для  Edit(Update);
	const {isEditOpen, handleUpdateModalClose, handleUpdateModalOpen} = useOpenEditModal();
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [clientId, setClientId] = useState<number | null>(null);

	//пагинация-------
	const [currentPage, setCurrentPage] = useState<number>(1);
    const clientsPerPage = 16;
	 const displayedClients = filteredClients.slice(0, currentPage * clientsPerPage);

  const handleLoadMore = useCallback(() => {
		setCurrentPage(prevPage => prevPage + 1);
  }, []);
  //----------


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
		<>
		<div className='bg-slate-300 flex items-center justify-between rounded-md pl-3 pr-3 pt-3 pb-3 mb-2 max-sm:pb-1 max-sm:pt-1 max-sm:pl-1 max-sm:pr-1'>
		<p className="text-white p-[5px] pl-[10px] pr-[10px] inline-flex max-sm:items-center max-sm:pl-[5px] max-sm:pr-[5px] bg-opacity-35 rounded-md bg-slate-500 mr-3 max-sm:text-[14px]">Кількість: <span className="text-gray-800 ml-2 font-semibold text-[18px]">{clientData.length}</span></p>
		<RebootRequestBth/>
		</div>
		{isError && <p className='text-center text-red-600'>Помілка сервера</p>}
		{isLoading ? <div className='w-full h-screen flex mt-10 justify-center'><div className='flex flex-col items-center'><p className='text-xl mb-2 text-slate-800'>Завантажую дані</p><Loader/></div></div> : <div className="table-box w-full">
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
		{(inputValue ? filteredClients : displayedClients).map((item, index) => (
                                <CLient key={item._id} 
                                        item={item} 
                                        index={index} 
                                        handelModalOpen={handelModalOpen} 
                                        handleUpdateModalOpen={handleUpdateModalOpen} 
                                        handelAlertWindowOpen={handelAlertWindowOpen} />
                            ))}
		 </tbody>
		</table>
		{displayedClients.length < filteredClients.length && (
                        <div className="flex justify-center mt-4">
                             <button className=" bg-slate-700 text-white hover:bg-orange-400 transition-colors duration-300 flex items-center justify-center rounded-full w-[30px] h-[30px]" onClick={handleLoadMore}>
                                <MdExpandMore size={25}/>
                            </button>
                        </div>
                    )}
		
		<InfoModal isOpen={isOpen} handelModalClose={handelModalClose}>
			<ClientCard isOpen={isOpen} handelModalClose={handelModalClose} />
		</InfoModal>
		<InfoModal isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}>
			<UpdateClient isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}/>
		</InfoModal>
		<InfoModal isOpen={isAlertOpen} handelModalClose={handleAlertWindowClose}>
				<AlertWindow clientId={clientId!} handleAlertWindowClose={handleAlertWindowClose}/>
		</InfoModal>
	</div>}
	</>
	);
};

export default ClinetList;