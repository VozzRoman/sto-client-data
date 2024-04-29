import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CLientI } from '../../types/types';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { findByIdClient, removeClient } from '../../redux/operations';
import InfoModal from '../InfoCardModal/InfoModal';
import ClientCard from '../ClientCard/ClientCard';
import UpdateClient from '../UpdateClient/UpdateClient';
import StarRating from '../StarRating/StarRating';

interface ClientProps {
	item: CLientI
	index: number,
}

const CLient:FC<ClientProps> = ({item, index}) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
	const [currentId, setCurrentId] = useState<string>('');
// const [fadeRemove, setFadeRemove] = useState<boolean>(false);


	const dispatch = useAppDispatch();

	//InfoModalOpen-----
	const handelModalOpen = () => {
		console.log(item.id);
		setIsOpen(true);
		dispatch(findByIdClient(String(item.id)))	
	}
	const handelModalClose = () => {
		console.log(item.id);
		setIsOpen(false);
	}
	//------------------

	//UpdateModalOpen--------
	const handleUpdateModalOpen = () => {
		setIsEditOpen(true);
		dispatch(findByIdClient(String(item.id)))	
	}
	const handleUpdateModalClose = () => {
		setIsEditOpen(false);
	}

	const handleDelte = () => {
		console.log(item.id)
		if (item.id !== undefined) {
			dispatch(removeClient(String(item.id)));
			// setFadeRemove(true)
		 }
	}

	return (
		<>
		<tr>
		<th style={{verticalAlign:'middle'}} scope="row">{index + 1}</th>
		<td valign="middle"><Link onClick={handelModalOpen} className='underline hover:text-orange-600' to=''>{item.registrationNumber_1}</Link></td>
		<td valign="middle">{item.carModel_1}</td>
		<td valign='middle'>{item.tire_1.width}/{item.tire_1.height}/{item.tire_1.radius}</td>
		<td valign="middle">{item.phone_1}</td>
		<td valign="middle">{item.name}</td>
		<td valign="middle"><StarRating item={item.character}/></td>

		<td className='flex justify-end'>
		<button onClick={handleUpdateModalOpen} type="button" className="btn btn-warning mr-[10px] text-white border-orange-600 bg-orange-600 hover:bg-orange-400 hover:border-orange-400"><FaEdit/></button>
		<button onClick={handleDelte} type="button" className="btn btn-warning mr-[10px] text-white border-orange-600 bg-orange-600 hover:bg-orange-400 hover:border-orange-400"><MdDelete/></button>
		</td>
		<InfoModal isOpen={isOpen} handelModalClose={handelModalClose}>
			<ClientCard isOpen={isOpen} handelModalClose={handelModalClose} />
		</InfoModal>
		<InfoModal isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}>
			<UpdateClient isOpen={isEditOpen} handelModalClose={handleUpdateModalClose}/>
		</InfoModal>
		</tr>

		</>
	);
};

export default CLient;