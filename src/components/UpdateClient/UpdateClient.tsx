import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addClient } from '../../redux/operations';
interface UpdateClientProp {
	isOpen: boolean
	handelModalClose: () => void;
}

const UpdateClient:FC<UpdateClientProp> = ({isOpen, handelModalClose}) => {
	const clientInfo = useAppSelector(state => state.clientReducer.current);
// console.log(clientInfo);
	const [inputData, setInputData] = useState({
		registrationNumber_1: '',
		registrationNumber_2:'',
		carModel_1:'',
		carModel_2:'',
		phone_1:'',
		phone_2:'',
		phone_3:'',
		name:''
	})

const [behavior, setBehavior] = useState<string>('');
const [carFlaws, setCarFlaws] = useState<string>('');
const [storeWheels, setStoreWheels] = useState<string>('');


//!!!!!
const behaviorData = ['норм', 'не дуже', 'ррЕдиска'];
const carFlawsData = ["ржаві гайки", "корито", "нема колес"]
const whellStorData = ["не здав", "здав"]
//!!!!
const dispatch = useAppDispatch();
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setInputData(prev => {
	return {...prev, [e.target.name]: e.target.value}
	})
}



	const handleOnChangeBehavior = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setBehavior(e.target.value);
	}
	const handleOnChangeFlaws = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setCarFlaws(e.target.value);
	}
	const handleOnChangeStoreWheels = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setStoreWheels(e.target.value);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			registrationNumber_1: inputData.registrationNumber_1,
			registrationNumber_2: inputData.registrationNumber_2,
			carModel_1: inputData.carModel_1,
			carModel_2: inputData.carModel_2,
			phone_1: inputData.phone_1,
			phone_2: inputData.phone_2,
			phone_3: inputData.phone_3,
			name: inputData.name,
			character: behavior,
			carFlaws: carFlaws,
			whellStor: storeWheels,
		}

		console.log('FormSend', data);
		dispatch(addClient(data))
	}
	return (
		<div className={`bg-slate-500 
		${isOpen ? "scale-1" : "scale-0"}
		max-w-[600px] w-full p-[30px] rounded-md transition-all duration-500 ease-in-out`}>
		{/* <form onSubmit={handleSubmit} className='text-white'>
				<div>
					<h3 className='text-[20px] border-b-[1px] text-orange-300 border-orang-400 mb-[10px] pb-2 font-semibold'>Редагування</h3>
				<div className='flex'>
					<div className='mb-2 w-1/2 mr-5'>
				<label className='block mb-1'>
					<span className='block mb-1'>Номер Авто</span>
					<input value={clientInfo?.registrationNumber_1} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='registrationNumber_1' />
				</label>
				<label className='block'>
					<span className='block'>Назва Авто</span>
					<input value={clientInfo?.carModel_1} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black'name='carModel_1'/>
				</label>
				</div>
				<div className='mb-2 w-1/2'>
				<label className='block mb-1'>
					<span className='block mb-1'>Номер Авто_2</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black'name='registrationNumber_2'/>
				</label>
				<label className='block'>
					<span className='block'>Назва Авто</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='carModel_2'/>
				</label>
				</div>
				</div>
				</div>

				<div>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Телефони клієнта</h3>
				<div className=''>
				<label className='block mb-2'>
					<span className='block'>Телефон_1</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 rounded-md pt-1 pb-1 pl-3 text-black' name='phone_1'/>
				</label>
				<label className='block mb-2'>
					<span className='block'>Телефон_2</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 rounded-md pt-1 pb-1 pl-3 text-black' name='phone_2'/>
				</label>
				<label className='block mb-2'>
					<span className='block'>Телефон_3</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 rounded-md pt-1 pb-1 pl-3 text-black' name='phone_3'/>
				</label>
				</div>
				</div>


				<div className='mb-[20px]'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Загальна інформація</h3>
				<div className='flex'>
					<div className='w-1/2'>
				<label className='block mb-2 mr-5'>
					<span className='block'>Ім'я</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='name'/>
				</label>
				<label className='block mr-5'>
					<span className='block'>Як людина</span>
					<select value={behavior} onChange={handleOnChangeBehavior} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
					<option value="">Вибрати</option>
						{behaviorData.map(item => (
							<option key={item} value={item}>{item}</option>
						))}
					</select>
				</label>
					</div>
					<div className='w-1/2'>
				<label className='block mb-2'>
					<span className='block'> Недоліки авто</span>
					<select value={carFlaws} onChange={handleOnChangeFlaws} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">Вибрати</option>
					{carFlawsData.map(item => (
							<option key={item} value={item}>{item}</option>
						))}
					</select>
				</label>
				<label className='block'>
					<span className='block'>Колеса під реалізацію</span>
					<select value={storeWheels} onChange={handleOnChangeStoreWheels} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
					<option value="">Вибрати</option>
					{whellStorData.map(item => (
							<option key={item} value={item}>{item}</option>
						))}
					</select>
				</label>
					</div>
				</div>
				</div>
				<div className='flex justify-center'>
				<button type='submit' className='pt-2 pb-2 pl-3 pr-3 bg-orange-400 rounded-md w-full hover:bg-orange-600 transition-all duration-200'>Оновити</button>
				</div>
			</form> */}
			</div>
	);
};

export default UpdateClient;