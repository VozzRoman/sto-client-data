import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addClient } from '../../redux/operations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import { tireHeight, tireWidth, tireRadius, serviceCar} from '../../selectedData/selectedData';
import { filteredValue } from '../../redux/filterSlice/filterSlice';
import { Watch } from 'react-loader-spinner';
import { InputDataI } from '../../types/types';
import Loader from '../Loader/Loader';

const SendFormData = () => {
const isLoading = useAppSelector(state => state.clientReducer.isLoading);
const [inputData, setInputData] = useState<InputDataI>({
		registrationNumber_1:'',
		registrationNumber_2:'',
		carModel_1:'',
		carModel_2:'',
		phone_1:'',
		phone_2:'',
		phone_3:'',
		name:'',
		tiersValue: '',
		tiersValue_2: '',
		tiersIssueYears:'',
		carFlaws:'',
		behavior: '',
		tireBrend:'',
		tireFlawStore:'',
		discount:"",
	})

const [error, setError] = useState<string>('');

const [success, setSuccess] = useState<string>('');
//Calendar
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : "";

const [selecteEndDate, setSelecteEndDate] = useState<Date | null>(null);
const formatteEndDate = selecteEndDate? selecteEndDate.toISOString().split('T')[0] : "";

//Car_1
const [widthTire, setWidthTire] = useState<string>('');
const [heightTire, setHeightTire] = useState<string>('');
const [radiusTire, setRadiusTire] = useState<string>('');
//Car_2
const [widthTire_2, setWidthTire_2] = useState<string>('');
const [heightTire_2, setHeightTire_2] = useState<string>('');
const [radiusTire_2, setRadiusTire_2] = useState<string>('');
//tireStorage
const [widthStorage, setWidthStorage] = useState<string>('');
const [heightStorage, setHeightStorage] = useState<string>('');
const [radiusStorage, setRadiusStorage] = useState<string>('');
//tireStorage_2
const [widthStorage_2, setWidthStorage_2] = useState<string>('');
const [heightStorage_2, setHeightStorage_2] = useState<string>('');
const [radiusStorage_2, setRadiusStorage_2] = useState<string>('');
//ServiceCar_1
const [serviceData_1, setServiceData_1] = useState<string[]>([]);
//ServiceCar_2
const [serviceData_2, setServiceData_2] = useState<string[]>([]);

console.log("1", inputData.tiersValue);
console.log("2", inputData.tiersValue_2);



const dispatch = useAppDispatch();
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setInputData(prev => {
	return {...prev, [e.target.name]: e.target.value}
	})
}

//SelectDate
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	 };
	const handleEndDateChange = (date: Date | null) => {
		setSelecteEndDate(date);
	 };
  
	//Selcet Tire
	//Car_one
	const handelOnChangeTireWidth = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setWidthTire(e.target.value);
	}
	const handelOnChangeTireHeight = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setHeightTire(e.target.value);
	}
	const handelOnChangeTireRadius = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setRadiusTire(e.target.value);
	}
	//Car_tow
	const handelOnChangeTireWidth_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setWidthTire_2(e.target.value);
	}
	const handelOnChangeTireHeight_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setHeightTire_2(e.target.value);
	}
	const handelOnChangeTireRadius_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setRadiusTire_2(e.target.value);
	}
	//tireStorageRduis_2
	const handleOnChangeTireStorageWidth_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setWidthStorage_2(e.target.value);
	}
	const handleOnChangeTireStorageHeight_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setHeightStorage_2(e.target.value);
	}
	const handleOnChangeTireStorageRadius_2 = (e:React.ChangeEvent<HTMLSelectElement>) => {
		setRadiusStorage_2(e.target.value);
	}
		//tireStorageRduis
		const handleOnChangeTireStorageWidth = (e:React.ChangeEvent<HTMLSelectElement>) => {
			setWidthStorage(e.target.value);
		}
		const handleOnChangeTireStorageHeight = (e:React.ChangeEvent<HTMLSelectElement>) => {
			setHeightStorage(e.target.value);
		}
		const handleOnChangeTireStorageRadius = (e:React.ChangeEvent<HTMLSelectElement>) => {
			setRadiusStorage(e.target.value);
		}

//ServiceCar_1
const handleServiceData_1 = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
	const selectedService = e.target.value;
	if (!serviceData_1.includes(selectedService)) {
	  setServiceData_1(prev => {
		 const updatedData = [...prev];
		 updatedData[index] = selectedService;
		 return updatedData;
	  });
	}
 }
//ServiceCar_2
const handleServiceData_2 = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
	const selectedService = e.target.value;
	if (!serviceData_2.includes(selectedService)) {
	  setServiceData_2(prev => {
		 const updatedData = [...prev];
		 updatedData[index] = selectedService;
		 return updatedData;
	  });
	}
}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setError('');
		e.preventDefault();
		const data = {
			registrationNumber_1: inputData.registrationNumber_1,
			carModel_1: inputData.carModel_1,
			tire_1: {
				width: widthTire,
				height: heightTire,
				radius: radiusTire 
			},
			tire_2: {
				width: widthTire_2,
				height: heightTire_2,
				radius: radiusTire_2 
			},
			registrationNumber_2: inputData.registrationNumber_2,
			carModel_2: inputData.carModel_2,
			phone_1: inputData.phone_1,
			phone_2: inputData.phone_2,
			phone_3: inputData.phone_3,
			name: inputData.name,
			discount: inputData.discount,
			tiresValue: inputData.tiersValue,
			tiresValue_2: inputData.tiersValue_2,
			tiersIssueYears: inputData.tiersIssueYears,
			dataStorage: formattedDate,
			endDataStorage: formatteEndDate,
			character: inputData.behavior,
			carFlaws: inputData.carFlaws,
			tireFlawStore: inputData.tireFlawStore,
			tireBrend: inputData.tireBrend,
			tireStorage: {
				width: widthStorage,
				height: heightStorage,
				radius: radiusStorage 
			},
			tireStorage_2: {
				width: widthStorage_2,
				height: heightStorage_2,
				radius: radiusStorage_2 
			},
			serviceCar_1: serviceData_1, 
			serviceCar_2: serviceData_2,

		}
		if(inputData.registrationNumber_1 === ''){
			return setSuccess('Введіть номер авто');
			
		}
		if(inputData.carModel_1 === ''){
			setSuccess('Введіть назву авто');
			return
		}
		if(widthTire === ''){
			setSuccess('Введіть довжину колес');
			return 
		}
		if(heightTire === ''){
			return setSuccess('Введіть висоту колес');
		}
		if(radiusTire === ''){
			return setSuccess('Введіть радіус колес');
		}
		if(serviceData_1.length <= 0){
			return setSuccess('Введіть хочаб один комплекс робіт');
		}
		if(inputData.name === ''){
			return setSuccess('Введіть ім я кліента');
		}
		if(inputData.behavior === ''){
			return setSuccess('Введіть рейтинг кліента');
		}
		if(inputData.phone_1 === ''){
			return setSuccess('Введіть телефон кліента');
		}
		//если вибрал на сохранение колеса
		if(selectedDate){
			console.log('вибрав зберігання')
			if(inputData.tireBrend === ''){
				return setSuccess('Введіть марку колес');
			}
			if(inputData.tiersIssueYears === ''){
				return setSuccess('Введіть рік випуску колес');
			}
			if(inputData.tiersValue === ''){
				return setSuccess('Введіть кількість колес');
			}
			if(widthStorage === ''){
				return setSuccess('Введіть довжину колес');
			}
			if(heightStorage === ''){
				return setSuccess('Введіть ширину колес');
			}
			if(radiusStorage === ''){
				return setSuccess('Введіть радіус колес');
			}
		}
		
		const response = await dispatch(addClient(data));
		if(response.payload === 'rejectedAdd') {
			setError('Не можу додати, щось з сервером!');
			setTimeout(() => {
				setError('');
			}, 3000)
		}
		setSuccess('Додава успішно');
		setTimeout(() => {
			setSuccess('');
		}, 3000)
		
		setInputData({
			registrationNumber_1:'',
			registrationNumber_2:'',
			carModel_1:'',
			carModel_2:'',
			phone_1:'',
			phone_2:'',
			phone_3:'',
			name:'',
			tiersValue: '',
			tiersValue_2: '',
			tiersIssueYears:'',
			carFlaws:'',
			behavior: '',
			tireBrend:'',
			tireFlawStore:'',
			discount:"",
		})
		setWidthTire('');
		setHeightTire('');
		setRadiusTire('');
		setWidthTire_2('');
		setHeightTire_2('');
		setRadiusTire_2('');
		setSelectedDate(null);
		setSelecteEndDate(null);
		setWidthStorage('');
		setHeightStorage('');
		setRadiusStorage('');
		setWidthStorage_2('');
		setHeightStorage_2('');
		setRadiusStorage_2('');
		setServiceData_1([]);
		setServiceData_2([]);
		dispatch(filteredValue(''));
			
	}

	useEffect(() => {
		for(const key in inputData){
			if(inputData[key] !== ""){
				 setSuccess('');
				 return
			}
		}

	},[inputData, widthTire, heightTire, radiusTire, serviceData_1, widthStorage, heightStorage, radiusStorage])

	
	return (
		<form onSubmit={handleSubmit} className='text-white'>
				<div>
					<h3 className='text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 text-orange-300 font-semibold'>Додати авто клієнта</h3>
				<div className='flex mb-1'>
				{/* ----------------------------------------Car_One------------------------------------------*/}
				<div className='mb-2 w-1/2 pr-5 border-r-[1px] border-gray-400'>
					<div className='flex'>
				<div className='w-1/2 mr-4'>
				<label className='block mb-1'>
					<span className='block text-[15px]'>Номер Авто</span>
					<input value={inputData.registrationNumber_1} onChange={handleOnChange} type="text" className={`
					${success === 'Введіть номер авто' ? "border-red-500" : "border-none"}
					 w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='registrationNumber_1'/>
				</label>
				<label className='block mb-1'>
					<span className='block text-[15px]'>Назва Авто</span>
					<input value={inputData.carModel_1} onChange={handleOnChange} type="text" className={`
					${success === 'Введіть назву авто' ? "border-red-500" : "border-none"}
					bg-gray-300 w-full rounded-md pt-1 text-[14px] border-[1px] pb-1 pl-3 text-black`} name='carModel_1'/>
				</label>
				<label className='block'>
					<span className='block text-[15px]'>Радіус колес</span>
					<div className='flex'>
					<select value={widthTire} onChange={handelOnChangeTireWidth} className={`
					${success === 'Введіть довжину колес' ? "border-red-500" : "border-none"}
					w-full mr-2 h-[30px] text-[14px] bg-slate-200 rounded-md border-[1px] pt-1 pb-1 pl-1 text-black`} >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightTire} onChange={handelOnChangeTireHeight} className={`
					${success === 'Введіть висоту колес' ? "border-red-500" : "border-none"}
					w-full mr-2 h-[30px] text-[14px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`} >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusTire} onChange={handelOnChangeTireRadius} className={`
					${success === 'Введіть радіус колес' ? "border-red-500" : "border-none"}
					w-full h-[30px] text-[14px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`}>
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
				</div>
				<div className='w-1/2'>
					<label className='w-full'>
						<p className='text-[15px]'>Об'єм робіт</p>
						{Array.from({ length: 4 }, (_, i) => (
							<div key={i} className='flex items-center w-full'>
							<p className='mr-2'>{i + 1}</p>
        <select value={serviceData_1[i] || ''} key={i} onChange={(e) => handleServiceData_1(e, i)} className={`
		  ${success === "Введіть хочаб один комплекс робіт" ? "border-red-500" : "border-none"}
		  w-full mb-[8.5px] h-[29px] text-[14px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`}>
          <option value=""></option>
          {serviceCar.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
		  	</div>
      ))}
					</label>
				</div>
					</div>
				</div>

				{/* ----------------------------------------Car_tow------------------------------------------*/}
				<div className='mb-2 w-1/2 pl-5'>
					<div className='flex'>
					<div className='w-1/2 mr-4'>
				<label className='block mb-1'>
					<span className='block text-[15px]'>Номер Авто_2</span>
					<input value={inputData.registrationNumber_2} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 text-[14px] pb-1 pl-3 text-black'name='registrationNumber_2'/>
				</label>
				<label className='block mb-1'>
					<span className='block text-[15px]'>Назва Авто_2</span>
					<input value={inputData.carModel_2} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 text-[14px] pb-1 pl-3 text-black' name='carModel_2'/>
				</label>
				<label className='block'>
					<span className='block text-[15px]'>Радіус колес</span>
					<div className='flex'>
					<select value={widthTire_2} onChange={handelOnChangeTireWidth_2} className='w-full mr-2 h-[30px] text-[14px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightTire_2} onChange={handelOnChangeTireHeight_2} className='w-full mr-2 h-[30px] text-[14px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusTire_2} onChange={handelOnChangeTireRadius_2} className='w-full h-[30px] text-[14px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
					</div>
					<div className='w-1/2'>
					<label className='w-full'>
						<p className='text-[15px]'>Об'єм робіт</p>
						{Array.from({ length: 4 }, (_, i) => (
							<div key={i} className='flex items-center w-full'>
							<p className='mr-2'>{i + 1}</p>
        <select value={serviceData_2[i] || ''}  key={i} onChange={(e) => handleServiceData_2(e, i)} className='w-full mb-[8.5px] h-[29px] text-[14px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black'>
          <option value=""></option>
          {serviceCar.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
		  	</div>
      ))}
					</label>
				</div>
					</div>
				</div>

				</div>
				</div>
					{/*------------------------------  Загальна інформація ------------------------- */}
				<div className='mb-2'>
				<h3 className='text-center text-[16px] border-b-[1px] border-gray-400 mb-[7px] pb-2'>Загальна інформація</h3>
					<div className='flex'>
				<div className='w-1/2'>
					<div className='flex'>
				<label className='block mr-5 w-full'>
					<span className='block text-[15px]'>Ім'я</span>
					<input value={inputData.name} onChange={handleOnChange} type="text" className={`
					 ${success === "Введіть ім я кліента" ? "border-red-500" : "border-none"}
					bg-gray-300 w-full text-[14px] rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='name'/>
				</label>
				<label className='block mb-2 mr-5 w-1/4'>
					<span className='block text-[15px]'>Знижка</span>
					<input value={inputData.discount} onChange={handleOnChange} type="text" className='bg-gray-300 w-full text-[14px] rounded-md pt-1 pb-1 pl-3 text-black' name='discount'/>
				</label>
				<label className='block mr-5 mb-2'>
					<span className='block text-[15px]'>Як людина</span>
					<input value={inputData.behavior} onChange={handleOnChange} type="number" className={`
					 ${success === "Введіть рейтинг кліента" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='behavior'/>
				</label>
					</div>
					
				
				<label className='block mb-2 mr-5'>
					<span className='block text-[15px]'> Недоліки авто</span>
					<input value={inputData.carFlaws} onChange={handleOnChange} type="text" className='bg-gray-300 text-[14px] w-full rounded-md pt-1 pb-1 pl-3 text-black' name='carFlaws'/>
				</label>
				</div>
				<div className='w-1/2 pl-5'>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Основний Телефон_1</span>
					<InputMask value={inputData.phone_1} suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className={`
					${success === "Введіть телефон кліента" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`}name='phone_1'/>
				</label>
				<div className='flex justify-between'>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Телефон_2</span>
					<InputMask value={inputData.phone_2} suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className='bg-gray-300 text-[14px] w-full rounded-md pt-1 pb-1 pl-3 text-black' name='phone_2'/>
				</label>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Телефон_3</span>
					<InputMask value={inputData.phone_3} suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className='bg-gray-300 text-[14px] w-full rounded-md pt-1 pb-1 pl-3 text-black' name='phone_3'/>
				</label>
				</div>
				</div>
					</div>
				</div>

				{/* ---------------------------------Колеса під Зберігання-------------------------*/}
				<div className=''>
				<h3 className='text-center text-[16px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Колеса під зберігання</h3>
				<div className='flex'>
					<div className='w-1/2'>

			<div className='flex'>
		<label className='mb-2 mr-5'>
      <h2 className='mb-[5px] text-[15px]'>Дата прийняття</h2>
      <DatePicker
		className='text-black text-[14px] pt-1 pb-1 pl-3 w-full rounded-md'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Формат даты, можно настроить по своему усмотрению
        placeholderText="Дата прийняття"
      />
    	</label>
		 <label className='block mr-5'>
					<span className='block text-[15px]'>Марка</span>
					<input value={inputData.tireBrend} onChange={handleOnChange} type="text" className={`
					${success === "Введіть марку колес" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='tireBrend'/>
				</label>

		 	</div>
		
					<div className='flex'>
					<label className='mb-2 mr-5'>
      <h2 className='mb-[5px] text-[15px]'>Дата видачі</h2>
      <DatePicker
		className='text-black text-[14px] pt-1 pb-1 pl-3 w-full rounded-md'
        selected={selecteEndDate}
        onChange={handleEndDateChange}
        dateFormat="dd/MM/yyyy" // Формат даты, можно настроить по своему усмотрению
        placeholderText="Дата прийняття"
		  disabled
      />
    	</label>
				<label className='block mr-5'>
					<span className='block text-[15px]'>Рік випуску</span>
					<input value={inputData.tiersIssueYears} onChange={handleOnChange} type="text" className={`
					${success === "Введіть рік випуску колес" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='tiersIssueYears'/>
				</label>
					</div>
					</div>
					<div className='w-1/2'>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Кількість та радіус колес</span>
					<div className='flex'>
					<label className='block mr-5'>
					<input value={inputData.tiersValue} placeholder='шт.' onChange={handleOnChange} type="text" className={`
					${success === "Введіть кількість колес" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='tiersValue'/>
				</label>
					<select value={widthStorage} onChange={handleOnChangeTireStorageWidth} className={`
					${success === "Введіть довжину колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] mr-4 h-[29px] border-[1px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black`} >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightStorage} onChange={handleOnChangeTireStorageHeight} className={`
					${success === "Введіть ширину колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] mr-4 h-[29px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusStorage} onChange={handleOnChangeTireStorageRadius} className={`
					${success === "Введіть радіус колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] h-[29px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`}>
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
						<label className='block mb-2'>
					<span className='block text-[15px]'>Кількість та радіус колес_2</span>
					<div className='flex'>
					<label className='block mr-5'>
					<input value={inputData.tiersValue_2} placeholder='шт.' onChange={handleOnChange} type="text" className='bg-gray-300 w-full text-[14px] rounded-md pt-1 pb-1 pl-3 text-black' name='tiersValue_2'/>
				</label>
					<select value={widthStorage_2} onChange={handleOnChangeTireStorageWidth_2} className='w-full text-[14px] mr-4 h-[29px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightStorage_2} onChange={handleOnChangeTireStorageHeight_2} className='w-full text-[14px] mr-4 h-[29px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusStorage_2} onChange={handleOnChangeTireStorageRadius_2} className='w-full text-[14px] h-[29px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
					</div>
				</div>
				</div>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Замітки для колес</span>
					<input value={inputData.tireFlawStore} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tireFlawStore'/>
				</label>
				<div className='flex mt-3 justify-start items-center'>
					
				<button disabled={isLoading} type='submit' className={`
				${isLoading ? "hover:bg-none" : "hover:bg-orange-600"}
				${isLoading ? "bg-slate-400" : "bg-orange-400 "}
				pt-1 pb-1 pl-3 pr-3 rounded-md w-1/2  transition-all duration-200`}>{isLoading ? "Завантажую" : "Додати до бази"}</button>
				{isLoading && <div className='w-1/2 flex justify-center'><Loader/></div>}
				<p className={`
				${error ? 'text-red-300 ' : 'text-orange-300'}
				
				text-[16px] mr-[40px] font-semibold text-center w-1/2`}>{error ? error : success }</p>
				</div>
			</form>
	);
};

export default SendFormData;