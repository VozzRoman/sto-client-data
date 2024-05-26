import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import 'react-datepicker/dist/react-datepicker.css';
import { selectOwner } from '../../selectedData/selectedData';
import { MdOutlineClose } from 'react-icons/md';
import { updateTire } from '../../redux/operations';
import { useAuth } from '../../hooks/AuthContext';
import CounterTire from '../CounterTire/CounterTire';

interface StoreUpdateDataProp {
	isOpen: boolean;
	handelModalClose: () => void;

}

const TireCard:FC<StoreUpdateDataProp> = ({handelModalClose, isOpen}) => {
const cuerrent = useAppSelector(state => state.tireReducer.current);
const [ updateDate, setUpdateDate] = useState<string>('');
const [ownerStatus, setOwnerStatus] = useState<string>('');
const {currentUser} = useAuth() ?? {};
const dispatch = useAppDispatch();


const handleUpdateOwner = async ()  => {
if(cuerrent){
	const data = {
		...cuerrent,
		tireOwner: selectOwner[0],
		dealDate: updateDate,
	}
	const response = await dispatch(updateTire(data))

	if(response.payload){
		return setOwnerStatus('Ти придбав колеса у чувака')
	}

}



}

useEffect(() => {
	setOwnerStatus('');
	const now = new Date();
	setUpdateDate(now.toISOString().split('T')[0]);	
}, [updateDate, cuerrent])




	
	return (
		<div className={`
		${isOpen ? "scale-1" : "scale-0"}
		relative bg-slate-600 p-[30px] mb-[60px] max-md:h-[492px] max-[840px]:p-[10px] max-w-[800px] w-[100%] rounded-md transition-all duration-500 ease-in-out`}>
		<button className='absolute top-0 right-0 max-[840px]:right-[-11px] max-[840px]:top-[-11px] z-50 m-4' 
		onClick={handelModalClose}>
			<MdOutlineClose className='fill-orange-500 hover:fill-orange-400 transition:fill duration-300' 
			size={25}/>
		</button>
		<div className='text-white'>
				<div>
					<div className='flex items-center justify-between border-b-[1px] mb-2'>
					<h3 className='text-[20px] border-gray-400 mr-[30px] text-orange-300 font-semibold'>Картка</h3>
					<label className='block mr-5'>
					<p className={`text-[19px] mr-2 text-red-200 first-letter:uppercase max-[840px]:text-[16px] bg-slate-500 pl-2 pr-2 mb-2 rounded-md`} >
					{cuerrent?.tireOwner}</p>
					</label>
			</div>
			
				</div>
		
				<div className='max-md:h-[420px] max-md:overflow-y-auto'>
				{/* ---------------------------------Колеса-------------------------*/}
				<div className=''>
				<div className='flex max-[840px]:block flex-wrap'>
					<div className='w-1/2 max-[840px]:w-full'>

			<div className='flex mb-2'>
		 <label className='block mr-5 max-[840px]:w-1/2'>
					<span className={`
					
					block text-[15px]`}>Марка</span>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold w-[127px] max-[840px]:w-full w-full rounded-md pt-1 pb-1 pl-3 pr-3 text-black`}>{cuerrent?.tireBrend}</p>
			</label>
			<label className='block mr-5 max-[840px]:mr-0 max-[840px]:w-1/2'>
					<span className={`
					
					block text-[15px]`}>Модель</span>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-[840px]:w-full w-full rounded-md pt-1 pb-1 pl-3 pr-3 text-black`}>{cuerrent?.tireModel}</p>
			</label>

		 	</div>
		
					<div className='flex'>

				<label className='block mr-5 max-[840px]:mr-2 w-1/2 max-[840px]:pr-2'>
					<p className={`
					block text-[15px] whitespace-nowrap`}>Рік</p>
						<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-[840px]:w-full w-full rounded-md pt-1 pb-1 pl-3 pr-3 text-black`}>{cuerrent?.issueYear}</p>
				</label>
				<label className='block mb-2 mr-5 max-[840px]:mr-0'>
					<span className={`
				
					block text-[15px] `}>Кількість та розмір</span>
					<div className='flex'>
					<label className='block mr-2'>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[60px] max-[840px]:max-w-[45px] w-screen rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.counts} <span className='text-[12px] max-[840px]:hidden inline-block'>шт</span></p>
				</label>
				<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[45px] mr-2 w-screen rounded-md pt-1 pb-1 pl-2 text-black`}>{cuerrent?.tireSize.width}</p>
				<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[37px] mr-2 w-screen rounded-md pt-1 pb-1 pl-2 text-black`}>{cuerrent?.tireSize.height}</p>
				<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[37px] w-screen rounded-md pt-1 pb-1 pl-2 text-black`}>{cuerrent?.tireSize.radius}</p>
					</div>
				</label>
					</div>
					</div>
					<div className='w-1/2 max-[840px]:w-full'>
					<div className='flex justify-between'>
				<label className='block mb-2'>
					<span className={`
				
					block text-[15px] whitespace-nowrap`}>Індекс</span>
					<div className='flex'>
					<label className='block mr-2'>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[45px] mr-2 w-screen rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.loadIndex}</p>
				</label>
				<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[45px] mr-2 w-screen rounded-md pt-1 pb-1 pl-4 text-black`}>{cuerrent?.tireSpeed}</p>

					</div>
				</label>
				<label className='block mb-2 max-[840px]:ml-8 ml-[40px] w-1/2'>
					<span className={`
				
					block text-[15px] ml-2 max-sm:ml-0`}>Рейтинг</span>
					<div className=''>
					<label className='block ml-2 max-sm:ml-0'>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[175px] max-sm:w-full w-screen rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.rating}</p>
				</label>
					</div>
				</label>
					</div>
					<div className='flex w-full'>
					<label className='block mr-5 w-1/2'>
					<span className='block text-[15px] whitespace-nowrap'>Ціна вхідна</span>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold  max-w-[150px] max-[840px]:max-w-[90px] mr-2 rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.inPrice} <span className='text-[14px]'>гр.</span></p>
					</label>
					<label className='block w-1/2'>
					<span className='block text-[15px] whitespace-nowrap'>Ціна продажу</span>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold max-w-[170px] max-[840px]:max-w-[90px] rounded-md pt-1 pb-1 pl-3 text-orange-300`}>{cuerrent?.outPrice} <span className='text-[14px]'>гр.</span></p>
					</label>
					</div>
					</div>
				</div>
				</div>
				{/* /------------------------------------Счетчик продать!!-------------------- */}
				<CounterTire handleModaClose={handelModalClose}/>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Замітки для колес</span>
					<p className={`bg-slate-500 text-[17px] w-full mr-2 rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.tireNotes ? cuerrent.tireNotes : "не має"}</p>
				</label>
							{/*------------------------------ Дані власника ------------------------- */}
						
						{cuerrent?.tireOwner === selectOwner[1] && <div className='mb-2'>
				<h3 className='text-center text-[16px] border-b-[1px] border-gray-400 mb-[7px]  mt-[20px] pb-2'>Дані {cuerrent.tireOwner}</h3>
					{ownerStatus !== 'Ти придбав колеса у чувака' ? (<>
					<div className='flex'>
				<div className='w-1/2'>
					<div className='flex'>
				<label className='block mr-5 w-full'>
					<span className='block text-[15px]'>Ім'я</span>
					<p className={`bg-slate-500 h-[31px] text-[17px] font-semibold w-full mr-2 rounded-md pt-1 pb-1 pl-3 text-black`}>{cuerrent?.clientName}</p>
				</label>
					</div>
				</div>
				<div className='w-1/2 pl-5'>
				<label className='block mb-2'>
					<span className='block text-[15px] '>Телефон</span>
					<a href={`tel:${cuerrent?.clientPhone}`} className='bg-slate-500 h-[31px] block text-[17px] font-semibold w-full mr-2 rounded-md pt-1 pb-1 pl-3 text-black underline'>{cuerrent?.clientPhone}</a>
				</label>
				<div className='flex justify-between'>
				</div>
				</div>
					</div>
					
					{currentUser && <button onClick={handleUpdateOwner} className='bg-red-400 hover:bg-red-600 transition-colors duration-300 pl-2 pr-2 rounded-md h-[31px] mt-2'>Придбати у {cuerrent.tireOwner}</button>}
					</>) : (<p className='text-center'>Ти придбав колеса у {cuerrent.tireOwner}</p>)}
					</div>}
					
					{cuerrent?.dealDate && cuerrent.tireOwner === selectOwner[0] &&
				<>
				<h1 className='border-b-[1px] pb-1 mt-3 mb-2'>Замітка</h1>
				<div className='bg-slate-500 rounded-md pt-2 pb-2 pl-4'>
					<p className='text-[14px]'>Ці колеса були придбані у: {cuerrent?.clientName}</p>
					<p className='text-[14px]'>Дата придбання: {cuerrent?.dealDate}</p>
					<a href={`tel:${cuerrent?.clientPhone}`} className='text-[14px] underline'>Телефон: {cuerrent?.clientPhone}</a>
				</div>
			
				</>}
				</div>
			
			</div>
		</div>
	);
};

export default TireCard;