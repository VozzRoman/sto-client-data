import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
interface InfoModalProp {
	children: ReactNode;
	isOpen: boolean
	handelModalClose: () => void;
}

const InfoModal:FC<InfoModalProp> = ({children, isOpen, handelModalClose}) => {
	const modalRoot = document.getElementById('infoModal') as HTMLElement;
	const handleOutSideClick = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
		if (e.target === e.currentTarget) {
		  handelModalClose();
		}
	 };
	return createPortal (
		<div onClick={handleOutSideClick} className={classNames(`
		${isOpen ? "visible" : "invisible"} 
		${isOpen ? "opacity-100" : "opacity-0"} 
		fixed top-0 left-0 w-full p-[15px] flex justify-center items-center h-[100%] h-screen bg-slate-300 bg-opacity-75 transition-all duration-500 ease-in-out z-[300]`)}>
		{children}
		</div>,
		modalRoot
	);
};

export default InfoModal;