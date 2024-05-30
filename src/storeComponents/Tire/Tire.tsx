import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TireStorageI } from '../../types/types';
import { selectOwner } from '../../selectedData/selectedData';
import { useAuth } from '../../hooks/AuthContext';

interface TireProps {
	item: TireStorageI
	index: number,
	handelModalOpen: (value: number) => void;
	handleUpdateModalOpen: (value: number) => void;
	handelAlertWindowOpen: (value: number) => void;

}

const Tire:FC<TireProps> = ({item, index, handelAlertWindowOpen, handleUpdateModalOpen, handelModalOpen}) => {

	const {currentUser} = useAuth() ?? {};
	
	return (
		<>
		<tr>
		<th style={{verticalAlign:'middle'}} className='border-b-[1px]'>{index + 1}</th>
		<td className='relative h-[38px] border-b-[1px]'>
			<Link 
			onClick={() => handelModalOpen(item._id!)} 
			className='underline hover:text-orange-600 pr-2 truncate max-w-[110px]' to=''>{item.tireBrend}</Link>
			{item.tireOwner === selectOwner[1] && <span className='absolute top-[2px] right-[10px] font-semibold bg-orange-500 pl-2 pr-2 rounded-full text-[9px] text-white flex items-center justify-center'>
				{item.tireOwner}
		</span>}
		</td>
		<td  valign="middle" className='border-b-[1px] visible max-md:hidden whitespace-nowrap pr-2'>{item.tireModel}</td>
		<td valign='middle' className='border-b-[1px] pr-2' style={{textAlign: 'center'}}>{item.tireSize.width}/{item.tireSize.height}/{item.tireSize.radius}</td>
		 <td valign='middle' className='border-b-[1px] visible max-md:hidden' style={{textAlign: 'center'}}>{item.issueYear}</td>
		<td className='relative border-b-[1px] visible max-md:hidden' valign="middle" style={{textAlign: 'center'}}>{item.counts === 0 ? "немає" : item.counts } </td>
		<td valign="middle" className='border-b-[1px] visible max-md:hidden' style={{textAlign: 'center'}}>{item.outPrice} UA</td>
		<td valign="middle" className='border-b-[1px] pr-2 truncate max-w-[10px] visible max-sm:hidden'>{item.rating}</td>
		{currentUser && <td className='flex justify-end items-center h-[38px] border-b-[1px]'>
		<button 
		onClick={() => handleUpdateModalOpen(item._id!)} 
		type="button" className="btn btn-warning mr-[20px] max-md:mr-[10px] p-2 rounded-md text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><FaEdit/></button>
		<button 
		onClick={() => handelAlertWindowOpen(item._id!)} 
		type="button" className="btn btn-warning mr-[10px] max-md:mr-[2px] p-2 rounded-md text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><MdDelete/></button>
		</td>		}
		</tr>

		</>
	);
};

export default Tire;