import { FC } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { filteredStoreValue, filteredValue } from '../../redux/filterSlice/filterSlice';
import { useAuth } from '../../hooks/AuthContext';
import {useLocation, useNavigate } from 'react-router';
import { IoMdExit } from "react-icons/io";
import { MdTransitEnterexit } from "react-icons/md";

const SearchForm: FC = () => {

const {logout, currentUser} = useAuth() ?? {};
const navigate = useNavigate();
const dispatch = useAppDispatch();
const {pathname} = useLocation();
const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
	if(pathname === '/clientData'){
		return dispatch(filteredValue(e.target.value))
	}
	if(pathname === '/tireStore'){
		return dispatch(filteredStoreValue(e.target.value))
	}
	
}

const handleLogOut = () => {
	if(currentUser){
		navigate('/signin')
	}
	if(logout){
		logout();
		navigate('/signin')
	}
	
}
	return (
		<form 
		className='mr-10 max-sm:mr-1 flex items-center h-[32px] max-w-[700px] w-[100%] ml-5 max-sm:ml-3'>
			<div className='relative w-full rounded-md overflow-hidden max-sm:mr-1'>
			<input 
			className='w-full pt-2 pb-2 pl-3 pr-3  rounded-r-full h-[41px] outline-none'
			disabled={pathname === '/tireStore/statistic'} 
			type="text" 
			placeholder='шукати'
			onChange={handleOnchange} 
			name='query'/>
			<button onClick={handleLogOut} className='max-sm:hidden block absolute text-white font-medium top-[3px] right-[4px]  w-[90px] h-[35px] bg-orange-400 hover:bg-orange-600 transition-all duration-300 rounded-full' 
			type='button'>
				{currentUser ? "Вийти" : "Адмін"}			
			</button>
			<button onClick={handleLogOut} className='absolute max-sm:flex items-center justify-center hidden text-white font-medium top-[3px] right-[4px]  w-[40px] h-[35px] bg-orange-400 hover:bg-orange-600 transition-all duration-300 rounded-full' 
			type='button'>
				{currentUser ? <IoMdExit size={20}/>  : <MdTransitEnterexit size={20} />}			
			</button>
			</div>
		</form>
	);
};

export default SearchForm;