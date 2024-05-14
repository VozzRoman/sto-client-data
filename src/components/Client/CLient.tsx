import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CLientI } from '../../types/types';

import StarRating from '../StarRating/StarRating';

interface ClientProps {
	item: CLientI
	index: number,
	handelModalOpen: (value: number) => void;
	handleUpdateModalOpen: (value: number) => void;
	handelAlertWindowOpen: (value: number) => void;
	handleDelte: (value: number) => void;
}

const CLient:FC<ClientProps> = ({item, index, handelModalOpen, handleUpdateModalOpen, handelAlertWindowOpen}) => {


	return (
		<>
		<tr>
		<th style={{verticalAlign:'middle'}} scope="row">{index + 1}</th>
		<td className='relative' valign="middle">
			<Link onClick={() => handelModalOpen(item.id!)} className='underline hover:text-orange-600' to=''>{item.registrationNumber_1 ? item.registrationNumber_1 : 'відсутній'}</Link>
			{item.registrationNumber_2 && <span className='absolute top-[2px] right-[10px] font-semibold bg-orange-500 pl-2 pr-2 rounded-full text-[9px] text-white flex items-center justify-center'>{item.registrationNumber_2}
		</span>}
		</td>
		<td  valign="middle">{item.carModel_1}</td>
		<td valign='middle' style={{textAlign:'center'}}>{item.tire_1.radius ? item.tire_1.radius : 'відсутній'}</td>
		<td className='relative' valign="middle">{item.phone_1}
		{item.phone_2 && <span className='absolute top-[3px] right-[40px] font-semibold bg-orange-500 w-[15px] h-[15px] rounded-full text-[11px] text-white flex items-center justify-center'>2
		</span>}
		{item.phone_2 && item.phone_3 && <span className='absolute top-[3px] right-[40px] font-semibold bg-orange-500 w-[15px] h-[15px] rounded-full text-[11px] text-white flex items-center justify-center'>3
		</span>}
		</td>
		<td valign="middle">{item.name ? item.name : 'відсутнє'}</td>
		<td valign="middle"><StarRating item={Number(item.character)}/></td>
		<td className='flex justify-end'>
		<button onClick={() => handleUpdateModalOpen(item.id!)} type="button" className="btn btn-warning mr-[10px] text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><FaEdit/></button>
		<button onClick={() => handelAlertWindowOpen(item.id!)} type="button" className="btn btn-warning mr-[10px] text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><MdDelete/></button>
		</td>		
		</tr>

		</>
	);
};

export default CLient;