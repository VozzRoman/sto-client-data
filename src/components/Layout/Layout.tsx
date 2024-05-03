import { FC, useState } from 'react';
import Container from '../Container/Container';
import { Outlet } from 'react-router';
import SearchForm from '../SearchFrom/SearchFrom';
import Modal from '../Modal/Modal';
import shinka from '../../assets/image/shina.png';
const Layout:FC = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);

const onCLose = () => {
	setIsOpen(false)
}
const openModal = () => {
	setIsOpen(true)
}

	return (
		<div>
		<header className='bg-slate-700 opacity-[0.99] shadow-md'>
			<Container>
				<div className='flex relative items-center h-[60px] justify-between'>
					<div className='flex items-center'>
						<h1 className='text-white font-semibold mr-[30px] border-b-[1px]'><span className='text-[20px]'>К</span>лієнтська База</h1>
						<button onClick={openModal} className='w-[40px] text-white text-2xl h-[40px] bg-orange-400 hover:bg-orange-600 transition-colors duration-300 rounded-md' 
			type='submit'>
					+
			</button>
					</div>
					<Modal onClose={onCLose} isOpen={isOpen}/>
					<SearchForm/>
					<div className='absolute top-[-39px] right-[-10px] w-[140px] h-[140px] z-[-1]'>
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