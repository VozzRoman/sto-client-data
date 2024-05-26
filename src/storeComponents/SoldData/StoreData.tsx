import  { FC } from 'react';
import { SoldStorageI } from '../../types/types';
import { useAuth } from '../../hooks/AuthContext';
import { MdDelete } from "react-icons/md";

interface StoreTireProp {
item: SoldStorageI
index: number
handelAlertWindowOpen: (value: number) => void;

}

const SoldData:FC<StoreTireProp> = ({item, index, handelAlertWindowOpen}) => {
	const {currentUser} = useAuth() ?? {};
	return (
		<>
		<tr className='text-blue-600'>
		<th style={{verticalAlign:'middle'}} className='border-b-[1px]'>{index + 1}</th>
		<td className='relative h-[38px] border-b-[1px]'>{item.tireBrend}</td>
		<td  valign="middle" className='border-b-[1px] visible max-md:hidden whitespace-nowrap pr-2'>{item.tireModel}</td>
		<td valign='middle' className='border-b-[1px] pr-2 border-b-[1px] visible max-md:hidden' style={{textAlign: 'center'}}>{item.tireSize.width}/{item.tireSize.height}/{item.tireSize.radius}</td>
		<td className='relative border-b-[1px] visible max-md:hidden' valign="middle" style={{textAlign: 'center'}}>{item.counts} </td>
		<td valign="middle" className='border-b-[1px] visible max-md:hidden' style={{textAlign: 'center'}}>{item.outPrice} UA</td>
		<td valign="middle" className='border-b-[1px] pr-2'>{item.soldData}</td>
		{currentUser && <td className='flex justify-end items-center h-[38px] border-b-[1px]'>
		<button 
		onClick={() => handelAlertWindowOpen(item.id!)} 
		type="button" className="btn btn-warning mr-[10px] max-md:mr-[2px] p-2 rounded-md text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600"><MdDelete/></button>
		</td>}
		</tr>
		</>
	
	);
};

export default SoldData;