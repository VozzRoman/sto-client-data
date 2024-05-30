import { FC, Suspense, startTransition, useState } from 'react';
import Container from '../Container/Container';
import { Outlet, useNavigate } from 'react-router';
import SearchForm from '../SearchFrom/SearchFrom';
import Modal from '../Modal/Modal';
import shinka from '../../assets/image/shina.png';
import { GiCarWheel } from "react-icons/gi";
import Loader from '../Loader/Loader';

const Layout:FC = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);
const navigate = useNavigate();

const onCLose = () => {
	setIsOpen(false)
	document.body.style.overflow = 'auto';
}
const openModal = () => {
	setIsOpen(true)
	document.body.style.overflow = 'hidden';
}

const handleButtonLink = () => {
	startTransition(() => {
      navigate('/tireStore');
    });
	
}

	return (
		<div>
		<header className='bg-slate-700 opacity-[0.99] shadow-md'>
			<Container>
				<div className='flex relative items-center h-[60px] justify-between'>
					<div className='flex items-center'>
						<h1 className='text-white font-semibold mr-[30px] border-b-[1px] max-sm:hidden block whitespace-nowrap'><span className='text-[20px]'>К</span>лієнтська База</h1>
			<button onClick={openModal} className='mr-[20px] max-sm:mr-[10px] w-[40px] text-white text-2xl h-[40px] bg-orange-400 hover:bg-orange-600 transition-colors duration-300 rounded-md' 
			type='submit'>
					+
			</button>
			<button onClick={handleButtonLink} className='text-orange-400 hover:text-black transition-colors duration-300 ease-linear'>
			<GiCarWheel size={42}/>
			</button>
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
				<Suspense fallback={<div className='w-full h-screen flex items-center justify-center'><Loader/></div>}>
						<Outlet/>
				</Suspense>
			</Container>
			</section>
		</main>
		<footer></footer>
		
		</div>
	
	);
};

export default Layout;