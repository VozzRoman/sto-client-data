import { FC,  useState } from 'react';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { filteredStoreValue } from '../../redux/filterSlice/filterSlice';
import { selectOwner } from '../../selectedData/selectedData';
import { FiSearch } from "react-icons/fi";



const SelectOwner: FC = () => {
const [owner, setOwner] = useState<string>('');
const dispatch = useAppDispatch();

	//Selcet Tire
	//Car_one
	const handelOnChangeOwner = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setOwner(e.target.value);
		
	}

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
	dispatch(filteredStoreValue(owner))	
}

	return (
		<form onSubmit={handleSubmit}
		className='mr-10 max-sm:mr-0 flex items-end max-sm:items-start max-w-[700px] w-[100%]'>
			<label className='block'>
					<span className='block text-[15px] font-semibold max-sm:hidden'>Реалізація/Шиномонтаж</span>
					<div className='flex'>
					<select value={owner} onChange={handelOnChangeOwner} className={`
					w-full mr-2 max-sm:mr-0 h-[30px] text-[14px] bg-slate-200 rounded-md border-[1px] pt-1 pb-1 pl-1 text-black`} >
					<option value="">разом</option>
					{selectOwner.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
				
					</div>
				</label>
				<button type='submit' className='ml-2 bg-orange-400 h-[29px] pl-2 pr-2 rounded-md text-white hover:bg-orange-600 transition-colors duration-300'><FiSearch size={25}/></button>
				
		</form>
	);
};

export default SelectOwner;