import classNames from 'classnames';
import { FC, useState} from 'react';
import {createPortal} from 'react-dom';

import { MdOutlineClose } from "react-icons/md";
import SendFormData from '../SendFormData/SendFormData';


interface ModalProps {
	onClose: () => void;
	isOpen: boolean;
	
	
}

const Modal: FC<ModalProps> = ({ onClose, isOpen}) => {
const modalRoot = document.getElementById('modal') as HTMLElement;
	

const handleOutSideClick = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
	if (e.target === e.currentTarget) {
	  onClose();
	}
 };
	
	return createPortal (
		<div onClick={handleOutSideClick} className={classNames(`
		${isOpen ? "visible" : "invisible"} 
		${isOpen ? "opacity-100" : "opacity-0"} 
		fixed top-0 left-0 w-full flex justify-center items-center h-[100%] h-screen bg-slate-400 bg-opacity-75 transition-all duration-500 ease-in-out z-[300]`)}>
	
			<div className={`
			${isOpen ? "scale-1" : "scale-0"}
			relative bg-slate-600 p-[30px] max-w-[800px] w-[100%] rounded-md transition-all duration-500 ease-in-out`}>
			<button className='absolute top-0 right-0 z-50 m-4' 
			onClick={onClose}>
				<MdOutlineClose className='fill-orange-500 hover:fill-orange-400 transition:fill duration-300' 
				size={25}/>
			</button>
			<SendFormData/>
			<div>
			
			</div>
		</div>

		</div>,
		modalRoot
	);
};

export default Modal;