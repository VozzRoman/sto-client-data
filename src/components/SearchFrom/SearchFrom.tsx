import { FC } from 'react';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { filteredValue } from '../../redux/filterSlice/filterSlice';
import { useAuth } from '../../hooks/AuthContext';


const SearchForm: FC = () => {

const {logout} = useAuth() ?? {};

const dispatch = useAppDispatch();

const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// setFilter(e.target.value);
	dispatch(filteredValue(e.target.value))
}

const handleLogOut = () => {
	if(logout){
		logout();
	}
	
}



	return (
		<form 
		className='mr-10 flex items-center h-[32px] max-w-[700px] w-[100%] ml-5'>
			<div className='relative w-full rounded-md overflow-hidden'>
			<input 
			className='w-full pt-2 pb-2 pl-3 pr-3 rounded-r-full h-[41px] outline-none' 
			type="text" 
			placeholder='шукати'
			onChange={handleOnchange} 
			name='query'/>
			<button onClick={handleLogOut} className='absolute text-white font-medium top-[3px] right-[4px]  w-[90px] h-[35px] bg-orange-400 hover:bg-orange-600 transition-all duration-300 rounded-full' 
			type='button'>
				Вийти			
			</button>
			</div>
		</form>
	);
};

export default SearchForm;