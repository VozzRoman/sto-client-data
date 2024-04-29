import { FC, useEffect, useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { clienFilter } from '../../redux/clientSlice/clientSLice';
import { searchClient } from '../../redux/operations';

const SearchForm: FC = () => {

const [filter, setFilter] = useState<string>('');

const dispatch = useAppDispatch();
console.log(filter);
const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setFilter(e.target.value);
}
 
useEffect(() => {
	dispatch(clienFilter(filter));
}, [filter])


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

	}
	return (
		<form 
		onSubmit={handleSubmit} 
		className=' md:mr-10 mr-5 flex items-center h-[32px] max-w-[700px] w-[100%] ml-5'>
			<div className='relative w-full'>
			<input 
			className='w-full pt-2 pb-2 pl-3 pr-3 rounded-s-sm rounded-e-lg' 
			type="text" 
			placeholder='шукати'
			onChange={handleOnchange} 
			value={filter}
			name='query'/>
			<button className='absolute top-0 right-[0px]  w-[40px] h-[40px] bg-orange-400 hover:bg-orange-600 transition-colors duration-300 rounded-e-lg' 
			type='submit'>
		<FiSearch 
			size={40} 
			color='white' 
			className='pointer-events-none h-full pl-2 pr-2'/>
			</button>
			</div>
		</form>
	);
};

export default SearchForm;