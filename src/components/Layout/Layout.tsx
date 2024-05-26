import { FC, useState } from 'react';
import Container from '../Container/Container';
import { Outlet } from 'react-router';
import SearchForm from '../SearchFrom/SearchFrom';
import Modal from '../Modal/Modal';
import shinka from '../../assets/image/shina.png';
import { GiCarWheel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const Layout:FC = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);

const {currentUser} = useAuth() ?? {};
const onCLose = () => {
	setIsOpen(false)
	document.body.style.overflow = 'auto';
}
const openModal = () => {
	setIsOpen(true)
	document.body.style.overflow = 'hidden';
}

	return (
		
		
		<div>
			
		<header className='bg-slate-700 opacity-[0.99] shadow-md'>
			<Container>
				<div className='flex relative items-center h-[60px] justify-between'>
					<div className='flex items-center'>
						<h1 className='text-white font-semibold mr-[30px] border-b-[1px] max-sm:hidden block whitespace-nowrap'><span className='text-[20px]'>К</span>лієнтська База</h1>
			{currentUser && <button onClick={openModal} className='mr-[20px] max-sm:mr-[10px] w-[40px] text-white text-2xl h-[40px] bg-orange-400 hover:bg-orange-600 transition-colors duration-300 rounded-md' 
			type='submit'>
					+
			</button>}
			<Link to='/tireStore' className='text-orange-400 hover:text-black transition-colors duration-300 ease-linear'>
			<GiCarWheel size={42}/>
			</Link>
					</div>
					<Modal onClose={onCLose} isOpen={isOpen}/>
					<SearchForm/>
					<div className='absolute top-[-39px] right-[-10px] max-sm:top-[-10px] max-sm:right-[-10px] max-sm:w-[80px] max-sm:h-[80px]  w-[140px] h-[140px] z-[-1]'>
					<img src={shinka} alt="pic" />
			</div>
				</div>
			</Container>
			
		</header>

		<main>
			<section>
			<Container>
				<Outlet/>
			</Container>
			</section>
		</main>
		<footer></footer>
		
		</div>
	
	);
};

export default Layout;