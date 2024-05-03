import { FC } from "react";
import {MdOutlineClose} from 'react-icons/md';
import { useAppSelector } from "../../hooks/reduxHooks";
import StarRating from "../StarRating/StarRating";
import { LiaAwardSolid } from "react-icons/lia";

interface ClientCardlProp {
	isOpen: boolean
	handelModalClose: () => void;
}



const ClientCard:FC<ClientCardlProp> = ({isOpen, handelModalClose}) => {
const clientInfo = useAppSelector(state => state.clientReducer.current);

	return (
		<div className={`
		${isOpen ? "scale-1" : "scale-0"}
		${clientInfo?.carModel_2 ? "max-w-[900px]" : "max-w-[700px]"}
		relative bg-slate-500 pt-[30px] pl-[30px] pr-[30px] w-[100%] rounded-md transition-scale duration-300 ease-in-out`}>
		<button className='absolute top-0 right-0 z-50 m-4' 
			onClick={handelModalClose}>
			<MdOutlineClose className='fill-orange-500 hover:fill-orange-400 transition:fill duration-300' 
			size={25}/>
		</button>
			<div className='text-white'>
				<div>
					<h3 className='text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 text-orange-300 font-semibold'>Картка клієнта</h3>
				<div className='flex mb-3'>
				{/* ----------------------------------------Car_One------------------------------------------*/}
				<div className={`
				${clientInfo?.carModel_2 || clientInfo?.registrationNumber_2 ? 'border-r-[1px]' : 'border-none' }
				${clientInfo?.carModel_2 || clientInfo?.registrationNumber_2 ? 'w-1/2' : 'w-full' }
				mb-2  pr-5 border-r-[1px] border-gray-400`}>
					<div className='flex'>
				<div className='w-1/3 mr-4 bg-slate-600 bg-opacity-50 rounded-md p-3'>
				<label className='block mb-1 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Номер Авто</span>
					<p className='w-full rounded-md text-black text-[18px] font-semibold'>{clientInfo?.registrationNumber_1}</p>
				</label>
				<label className='block border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Назва Авто</span>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.carModel_1}</p>
				</label>
				<label className='block'>
					<span className='block'>Радіус колес</span>
					<div className='flex'>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.width}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.height}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.radius}</p>
					</div>
				</label>
				</div>
				<div className={`
				${clientInfo?.carModel_2 ? "ml-[0px]" : "ml-[20px]"}
				`}>
					<label className='w-full'>
						<p className='ml-3'>Об'єм робіт</p>
					<ul className="w-full">
					{clientInfo?.serviceCar_1.map((item, index) => {
						return (
							<div key={index} className="flex items-center">
							<p className="mr-2 text-black">{index + 1}.</p>
							<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{item}</p>
							</div>
						)
					})}
					</ul>
					</label>
				</div>
					</div>
				</div>

				{/* ----------------------------------------Car_tow------------------------------------------*/}
			{clientInfo?.carModel_2 &&	<div className='mb-2 w-1/2 pl-5'>
				<div className='flex'>
				<div className='w-1/3 mr-4 mr-4 bg-slate-600 bg-opacity-50 rounded-md p-3'>
				<label className='block mb-1 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block '>Номер Авто_2</span>
					<p className='w-full rounded-md text-black text-[18px] font-semibold'>{clientInfo?.registrationNumber_2}</p>
				</label>
				<label className='block border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Назва Авто</span>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.carModel_2}</p>
				</label>
				<label className='block'>
					<span className='block'>Радіус колес</span>
					<div className='flex'>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.width}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.height}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.radius}</p>
					</div>
				</label>
				</div>
				<div className=''>
					<label className='w-full'>
						<p className='ml-3'>Об'єм робіт</p>
					<ul className="w-full">
					{clientInfo?.serviceCar_2.map((item, index) => {
						return (
							<div key={index} className="flex items-center">
							<p className="mr-2 text-black">{index + 1}.</p>
							<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{item}</p>
							</div>
						)
					})}
					</ul>
					</label>
				</div>
					</div>
				</div>}

				</div>
				</div>
					{/*------------------------------  Загальна інформація ------------------------- */}
				<div className='mb-2'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Загальна інформація</h3>
					<div className='flex'>
				<div className='w-1/2 relative'>
				<label className='block mb-2 mr-5 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Ім'я</span>
					<p className='rounded-md text-black text-[18px] font-semibold'>{clientInfo?.name}</p>
					{clientInfo?.discount && <div>
					<LiaAwardSolid className="absolute top-0 right-[20px]" size={80} color="orange"/>
					<p className="absolute top-[20px] right-[44px] font-semibold">{clientInfo?.discount}<span className="text-[10px]">%</span></p></div>}
				</label>
				<label className='block mr-5 mb-2 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Як людина</span>
					
					<StarRating item={Number(clientInfo?.character)}/>
				</label>
				<label className='block mr-5'>
					<span className='block'> Недоліки авто</span>
					<p className='rounded-md text-black text-[18px] font-semibold underline'>{clientInfo?.carFlaws ? clientInfo.carFlaws: "немае"}</p>
				</label>
				</div>
				<div className='w-1/2 pl-5'>
				<span className='block'>{clientInfo?.phone_2 || clientInfo?.phone_3 ? 'Телефони' : 'Телефон'}</span>
				<label className='block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.phone_1}</p>
				</label>
				{clientInfo?.phone_2 && <label className='block mb-2 block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.phone_2}</p>
				</label>}
				{clientInfo?.phone_3 && <label className='block mb-2 block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.phone_3}</p>
				</label>}
				</div>
					</div>
				</div>

				{/* ---------------------------------Колеса під збнрігання-------------------------*/}
				<div className='mb-[20px]'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 '>Колеса під зберігання</h3>
				{clientInfo?.dataStorage ? (<div className='flex bg-slate-800 bg-opacity-50 rounded-md p-5'>
					<div className='w-[60%]'>

			
			<div className='flex border-b-[1px] border-gray-300 border-opacity-10 mr-5'>
		<label className=' mr-5 w-1/2'>
      <h2 className='mb-[5px] whitespace-nowrap'>Дата прийняття</h2>
      <p className='rounded-md pb-1 text-red-300 text-[18px] font-semibold'>{clientInfo?.dataStorage}</p>
    	</label>
		 <label className='block mr-5 w-full'>
					<span className='block'>Марка</span>
					<p className='rounded-md pb-1  text-black text-[18px] font-semibold'>{clientInfo?.tireBrend}</p>
				</label>
		 	</div>
		
					<div className='flex'>
				<label className={`
				${clientInfo.carModel_2 ? "mr-3" : "mr-[50px]"}
				block w-1/2`}>
					<span className='block whitespace-nowrap'>Рік випуску</span>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tiersIssueYears}</p>
				</label>
				<label className='block mb-2 mr-5 w-full'>
					<span className='block'>Недоліки колес</span>
					<p className='rounded-md pb-1 text-black text-[18px] w-[250px] break-words font-semibold'>{clientInfo?.tireFlawStore ? clientInfo.tireFlawStore: "немае"}</p>
				</label>
					</div>
					</div>
					<div className='w-1/2'>
				<label className='block mb-2 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Кількість та радіус колес</span>
					<div className='flex'>
					<label className='block mr-5'>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tiresValue} шт.</p>
				</label>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage.width}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage.height}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage.radius}</p>
					</div>
				</label>
		
				{clientInfo.tireStorage_2.width && <label className='block mb-2'>
					<span className='block'>Кількість та радіус колес_2</span>
					 <div className='flex'>
					 <label className='block mr-5'>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tiresValue_2} шт.</p>
				</label>
				<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage_2.width}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage_2.height}/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tireStorage_2.radius}</p>
					</div>
						</label>}
					</div>
				</div>) : (<div className='bg-slate-800 bg-opacity-40 rounded-md pl-3 pt-2 pb-2'><p className="text-center text-xl text-black font-semibold">{clientInfo?.endDataStorage ? `Видані ${clientInfo.endDataStorage}` : "Колеса під зберігання немає"}</p></div>)}
				</div>
			
			</div>
		</div>
	);
};

export default ClientCard;