import { useState } from 'react';
import { findByIdClient, findByIdTire } from '../redux/operations';
import { useAppDispatch } from './reduxHooks';
import { useLocation } from 'react-router';
import { resetCounter } from '../redux/counterSlice/counterSlice';

const useOpenModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const {pathname} = useLocation();
	const dispatch = useAppDispatch();
		//InfoModalOpen-----
		const handelModalOpen = (value: number) => {
			setIsOpen(true);
			document.body.style.overflow = 'hidden';
		//Откріваем Карточку Клиента
		if(pathname === '/clientData'){
				dispatch(findByIdClient(String(value)))
				return
			}
		//Откріваем карточку Колес-----
		if(pathname === "/tireStore"){
				dispatch(findByIdTire(String(value)))
				return
			}	
		}

		const handelModalClose = () => {
			setIsOpen(false);
			
			document.body.style.overflow = 'auto';
			if(pathname === "/tireStore"){
				dispatch(resetCounter());
				return
			}	
		}
		//------------------


	return {isOpen, setIsOpen, handelModalClose, handelModalOpen};
};

export default useOpenModal;