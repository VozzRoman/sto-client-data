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
		relative bg-slate-500 pt-[30px] pl-[30px] pr-[30px] w-[100%] rounded-md transition-scale duration-300 ease-in-out 
		max-md:h-[480px] max-md:p-[10px]`}>
			
		<button className=' absolute top-0 right-0 z-50 m-4' 
			onClick={handelModalClose}>
			<MdOutlineClose className='fill-orange-500 hover:fill-orange-400 transition:fill duration-300' 
			size={25}/>
		</button>
		<h3 className='text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 text-orange-300 font-semibold'>Картка клієнта</h3>
		<div className="max-md:h-[400px] max-md:overflow-y-auto max-md:border-b-[2px]">
			<div className='text-white'>
				<div>
					
	
				<div className='flex mb-3 
				max-[840px]:block flex-wrap max-[840px]:w-full'>
				{/* ----------------------------------------Car_One------------------------------------------*/}
				<div className={` 
				max-[840px]:w-full max-[840px]:border-none
				${clientInfo?.carModel_2 || clientInfo?.registrationNumber_2 ? 'border-r-[1px]' : 'border-none' }
				${clientInfo?.carModel_2 || clientInfo?.registrationNumber_2 ? 'w-1/2' : 'w-full' }
				mb-2  pr-5 max-md:pr-0 border-r-[1px] border-gray-400`}>
					<div className='flex max-[840px]:block'>
				<div className='w-1/3 
				max-[840px]:w-full 
				mr-4 bg-slate-600 bg-opacity-50 rounded-md p-3'>
				<label className='block mb-1 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Номер Авто</span>
					<p className='w-full rounded-md text-black text-[18px] font-semibold'>{clientInfo?.registrationNumber_1 ? clientInfo?.registrationNumber_1 : <span className="text-gray-700">Відсутній</span>}</p>
				</label>
				<label className='block border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Назва Авто</span>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.carModel_1}</p>
				</label>
				<label className='block'>
					<span className='block whitespace-nowrap'>Радіус колес</span>
					<div className='flex'>
						{clientInfo?.tire_1.radius && clientInfo?.tire_1.height && clientInfo?.tire_1.radius &&(<>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.width ? clientInfo?.tire_1.width : <span className="text-gray-700">No</span> }/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.height ? clientInfo?.tire_1.height : <span className="text-gray-700">No</span> }/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.radius ? clientInfo?.tire_1.radius : <span className="text-gray-700">No</span> }</p>
						</>)}
						{clientInfo?.tire_1 && <p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_1.radius ? clientInfo?.tire_1.radius : <span className="text-gray-700">No</span> }</p>}
					</div>
				</label>
				</div>
				<div className={`w-full max-[840px]:hidden block
				${clientInfo?.carModel_2 ? "ml-[0px]" : "ml-[20px]"}
				`}>
					<div className="">
					<label className='w-full'>
						<p className='ml-3'>Об'єм робіт</p>

					</label>
					{clientInfo?.serviceCar_1.length ? (<ul className="w-full">
					{clientInfo?.serviceCar_1.map((item, index) => {
						return (
							<div key={index} className="flex items-center">
							<p className="mr-2 text-black">{index + 1}.</p>
							<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{item}</p>
							</div>
						)
					})}
					</ul>) : <div className="flex items-center justify-center w-full rounded-md h-[170px] bg-slate-600 bg-opacity-50"><span className="text-gray-700 text-xl font-semibold">Ще не визначений!</span></div>}
					</div>
				</div>
					</div>
				</div>

				{/* ----------------------------------------Car_tow------------------------------------------*/}
			{clientInfo?.carModel_2 &&	<div className='mb-2 w-1/2  pl-5
				max-[840px]:w-full max-[840px]:pl-0 '>
				<div className='flex max-[840px]:w-full'>
				<div className='w-1/3 
				max-[840px]:w-full max-[840px]:mr-0 
				mr-4 mr-4 bg-slate-600 bg-opacity-50 rounded-md p-3'>
				<label className='block mb-1 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block whitespace-nowrap'>Номер Авто_2</span>
					<p className='w-full rounded-md text-black text-[18px] font-semibold'>{clientInfo?.registrationNumber_2 ? clientInfo?.registrationNumber_2 : <span className="text-gray-700">Відсутній</span>}</p>
				</label>
				<label className='block border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Назва Авто</span>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.carModel_2}</p>
				</label>
				<label className='block'>
					<span className='block whitespace-nowrap'>Радіус колес</span>
					<div className='flex'>
					{clientInfo?.tire_2.radius && clientInfo?.tire_2.height && clientInfo?.tire_2.radius &&(<>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.width ? clientInfo?.tire_2.width : <span className="text-gray-700">No</span> }/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.height ? clientInfo?.tire_2.height : <span className="text-gray-700">No</span> }/</p>
					<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.radius ? clientInfo?.tire_2.radius : <span className="text-gray-700">No</span> }</p>
						</>)}
						{clientInfo?.tire_2 && !clientInfo?.tire_2.height && !clientInfo?.tire_2.radius && <p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{clientInfo?.tire_2.radius ? clientInfo?.tire_2.radius : <span className="text-gray-700">No</span> }</p>}
					</div>
				</label>
				</div>
				<div className='w-full max-[840px]:hidden block'>
					<label className='w-full'>
						<p className='ml-3'>Об'єм робіт</p>
					{clientInfo.serviceCar_2.length ? (<ul className="w-full">
					{clientInfo?.serviceCar_2.map((item, index) => {
						return (
							<div key={index} className="flex items-center">
							<p className="mr-2 text-black">{index + 1}.</p>
							<p className='rounded-md pb-1 text-black text-[18px] font-semibold'>{item}</p>
							</div>
						)
					})}
					</ul>): <div className="flex items-center justify-center w-full rounded-md h-[170px] bg-slate-600 bg-opacity-50"><span className="text-gray-700 text-xl font-semibold">Ще не визначений!</span></div>}
					</label>
				</div>
					</div>
				</div>}

				</div>
				</div>
					{/*------------------------------  Загальна інформація ------------------------- */}
				<div className='mb-2'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Загальна інформація</h3>
					<div className='flex max-[840px]:block flex-wrap'>
				<div className='w-1/2 relative max-[840px]:w-full'>
				<label className='block mb-2 mr-5 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Ім'я</span>
					<p className='rounded-md text-black text-[18px] font-semibold'>{clientInfo?.name ? clientInfo?.name : <span className="text-gray-700">Відсутнє</span>}</p>
					{clientInfo?.discount && <div>
					<LiaAwardSolid className="absolute top-0 right-[20px]" size={80} color="orange"/>
					<p className="absolute top-[20px] right-[44px] font-semibold">{clientInfo?.discount}<span className="text-[10px]">%</span></p></div>}
				</label>
				<label className='block mr-5 mb-2 border-b-[1px] border-gray-300 border-opacity-10'>
					<span className='block'>Як людина</span>
					
					<StarRating item={Number(clientInfo?.character)}/>
				</label>
				<label className='block mr-5'>
					<span className='block whitespace-nowrap'>Недоліки авто</span>
					<p className='rounded-md text-black text-[16px] font-normal p-2 bg-slate-600 bg-opacity-50'>{clientInfo?.carFlaws ? clientInfo.carFlaws: "немае"}</p>
				</label>
				</div>
				<div className='w-1/2 pl-5 max-[840px]:pl-0 max-[840px]:w-full max-[840px]:mr-[30px]'>
				<span className='block'>{clientInfo?.phone_2 || clientInfo?.phone_3 ? 'Телефони' : 'Телефон'}</span>
				<label className='block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					
					<a href={`tel:${clientInfo?.phone_1}`} className='rounded-md pb-1 underline text-black text-[18px] font-semibold whitespace-nowrap'>{clientInfo?.phone_1}</a>
				</label>
				{clientInfo?.phone_2 && <label className='block mb-2 block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					
					<a href={`tel:${clientInfo?.phone_2}`} className='rounded-md pb-1 underline text-black text-[18px] font-semibold whitespace-nowrap'>{clientInfo?.phone_2}</a>
				</label>}
				{clientInfo?.phone_3 && <label className='block mb-2 block mb-2 bg-slate-600 bg-opacity-20 rounded-md pl-3 pt-2'>
					<a href={`tel:${clientInfo?.phone_3}`} className='rounded-md pb-1 underline text-black text-[18px] font-semibold whitespace-nowrap'>{clientInfo?.phone_3}</a>
				</label>}
				</div>
					</div>
				</div>

				{/* ---------------------------------Колеса під збнрігання-------------------------*/}
				<div className='mb-[20px]'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 max-sm:text-[16px]'>Колеса під зберігання</h3>
				{clientInfo?.dataStorage ? (<div className='flex max-[840px]:blcok flex-wrap bg-slate-800 bg-opacity-50 rounded-md p-5'>
					<div className='w-[60%] max-[840px]: w-full'>

			
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
					<span className='block whitespace-nowrap'>Недоліки колес</span>
					<p className='rounded-md pb-1 text-black text-[16px] break-words font-normal leading-[1.0]'>{clientInfo?.tireFlawStore ? clientInfo.tireFlawStore: "немае"}</p>
				</label>
					</div>
					</div>
					<div className='w-1/2 max-[840px]:w-full'>
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
				</div>) : (<div className='bg-slate-800 bg-opacity-40 rounded-md pl-3 pt-2 pb-2'><div className="text-center text-xl text-black font-semibold">{clientInfo?.endDataStorage ? <><p>Видані <span className="text-red-200 text-[19px]">{clientInfo.endDataStorage}</span></p></> : <span className="max-sm:text-[16px]">Колеса під зберігання немає</span>}</div></div>)}
				</div>
		
			</div>
		</div>
		</div>
	);
};

export default ClientCard;