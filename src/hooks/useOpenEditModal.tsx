import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import { findByIdClient, findByIdTire } from "../redux/operations";
import { useLocation } from "react-router";


const useOpenEditModal = () => {
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const {pathname} = useLocation();
	const handleUpdateModalOpen = (value: number) => {
		setIsEditOpen(true);
		document.body.style.overflow = 'hidden';
		if(pathname === "/clientData"){	
			dispatch(findByIdClient(String(value)))
			return
		}
		if(pathname === "/tireStore"){
			dispatch(findByIdTire(String(value)))
		}
	}


	const handleUpdateModalClose = () => {
		setIsEditOpen(false);
		document.body.style.overflow = 'auto';
	}


	return {isEditOpen, handleUpdateModalClose, handleUpdateModalOpen};
};

export default useOpenEditModal;