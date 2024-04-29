import { FC, useState } from 'react';
import Container from '../Container/Container';
import { Outlet } from 'react-router';
import SearchForm from '../SearchFrom/SearchFrom';
import Modal from '../Modal/Modal';

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
		<header className='bg-gray-900 '>
			<Container>
				<div className='flex items-center h-[60px] justify-between'>
					<div className='flex items-center'>
						<h1 className='text-white font-semibold mr-[30px]'>Клієнтська база</h1>
						<button onClick={openModal} className='w-[40px] text-white text-2xl h-[40px] bg-orange-400 hover:bg-orange-600 transition-colors duration-300 rounded-md' 
			type='submit'>
					+
			</button>
					</div>
					<Modal onClose={onCLose} isOpen={isOpen}/>
					<SearchForm/>
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