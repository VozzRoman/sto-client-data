import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import shinka from "../assets/image/shina.png";
import Container from "../components/Container/Container";
import { startTransition } from "react";

const SelectDataPage = () => {
	const navigate = useNavigate();
	const handleButtonLinkToTireStore = () => {
		startTransition(() => {
			navigate('/tireStore');
		 });
	}
	const handleButtonLinkToClientData = () => {
		startTransition(() => {
			navigate('/clientData');
		 });
	}

	return (
		<Container>
		<div className="h-screen flex items-center justify-center p-2">
			<div className="relative max-w-[400px] w-screen flex justify-center items-center">
			<div className="relative bg-slate-700 bg-opacity-[0.99] rounded-md p-10 z-10 opacity-[0.97]">
				<div className="border-b-[2px] border-gray-300 flex justify-center">
				<button onClick={handleButtonLinkToClientData} className="text-white max-sm:text-xl text-2xl font-semibold h-[30px] mb-[10px] flex items-center hover:text-orange-600 transition-colors duration-300 ease-linear"><span className="mr-4">Клієнтська база</span><FaUserAlt/> </button>
				</div>
				<div className="flex justify-center mt-2">
				<button onClick={handleButtonLinkToTireStore} className="text-white max-sm:text-xl text-2xl font-semibold h-[30px] mb-[10px] flex items-center hover:text-orange-600 transition-colors duration-300 ease-linear"><span className="mr-4">Склад колес</span><GiCarWheel size={30}/></button>
				</div>
					
			</div>
			
			</div>
			<div className='absolute z-[-1] opacity-90 w-[330px] h-[330px]'>
					<img src={shinka} alt="pic" />
				</div>
		</div>
		</Container>
	);
};

export default SelectDataPage;