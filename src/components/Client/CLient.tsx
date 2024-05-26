import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CLientI } from '../../types/types';

import StarRating from '../StarRating/StarRating';
import { useAuth } from '../../hooks/AuthContext';

interface ClientProps {
	item: CLientI
	index: number,
	handelModalOpen: (value: number) => void;
	handleUpdateModalOpen: (value: number) => void;
	handelAlertWindowOpen: (value: number) => void;
}

const CLient:FC<ClientProps> = ({item, index, handelModalOpen, handleUpdateModalOpen, handelAlertWindowOpen}) => {

	const {currentUser} = useAuth() ?? {};
	return (
		<>
		<tr>
		<th style={{verticalAlign:'middle'}} className='border-b-[1px] pr-2'>{index + 1}</th>
		<td className='relative h-[38px] border-b-[1px] max-sm:hidden visible' valign="middle">
			<Link onClick={() => handelModalOpen(item.id!)} className='underline hover:text-orange-600' to=''>{item.registrationNumber_1 ? item.registrationNumber_1 : 'відсутній'}</Link>
			{item.registrationNumber_2 && <span className='absolute top-[-3px] right-[10px] font-semibold bg-orange-500 pl-2 pr-2 rounded-full text-[9px] text-white flex items-center justify-center'>{item.registrationNumber_2}
		</span>}
		</td>
		<td  className='border-b-[1px] pl-3 pr-3 visible max-md:hidden whitespace-nowrap' >{item.carModel_1}</td>
		<td className='border-b-[1px] visible max-md:hidden pr-3' style={{textAlign: 'center'}}>{item.tire_1.radius ? item.tire_1.radius : 'відсутній'}</td>
		<td  className='relative border-b-[1px] pr-3' valign="middle">
		<Link onClick={() => handelModalOpen(item.id!)} className='underline hover:text-orange-600' to=''>
			{item.phone_1}
		</Link>
		{item.phone_2 && <span className='absolute top-[-3px] right-[40px] font-semibold bg-orange-500 w-[15px] h-[15px] rounded-full text-[11px] text-white flex items-center justify-center'>2
		</span>}
		{item.phone_3  && <span className='absolute top-[-3px] right-[40px] font-semibold bg-orange-500 w-[15px] h-[15px] rounded-full text-[11px] text-white flex items-center justify-center'>3
		</span>}
		</td>
		<td className='border-b-[1px] pr-3 visible max-md:hidden whitespace-nowrap' valign="middle">{item.name ? item.name : 'відсутнє'}</td>
		<td className='border-b-[1px] pr-3'><StarRating item={Number(item.character)}/></td>
		{currentUser && <td className='flex justify-end items-center border-b-[1px] h-[38px]'>
		<button onClick={() => handleUpdateModalOpen(item.id!)} type="button" className="h-[32px] mr-[20px] max-md:mr-[10px] p-2 rounded-md text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><FaEdit/></button>
		<button onClick={() => handelAlertWindowOpen(item.id!)} type="button" className="h-[32px] mr-[10px] max-md:mr-[2px] p-2 rounded-md text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><MdDelete/></button>
		</td>	}	
		</tr>
		

		</>
	);
};

export default CLient;