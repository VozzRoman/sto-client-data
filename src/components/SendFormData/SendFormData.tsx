import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addClient } from '../../redux/operations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import { tireHeight, tireWidth, tireRadius, serviceCar} from '../../selectedData/selectedData';

const SendFormData = () => {

const [inputData, setInputData] = useState({
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
		behavior: 0,
		tireBrend:'',
		tireFlawStore:''
	})

// const [behavior, setBehavior] = useState<string>('');
// const [carFlaws, setCarFlaws] = useState<string>('');

//Calendar
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : "";

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





const dispatch = useAppDispatch();
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setInputData(prev => {
	return {...prev, [e.target.name]: e.target.value}
	})
}



	// const handleOnChangeBehavior = (e:React.ChangeEvent<HTMLSelectElement>) => {
	// 	setBehavior(e.target.value);
	// }
	// const handleOnChangeFlaws = (e:React.ChangeEvent<HTMLSelectElement>) => {
	// 	setCarFlaws(e.target.value);
	// }
	// const handleOnChangeStoreWheels = (e:React.ChangeEvent<HTMLSelectElement>) => {
	// 	setStoreWheels(e.target.value);
	// }
	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
			tiresValue: inputData.tiersValue,
			tiresValue_2: inputData.tiersValue,
			tiersIssueYears: inputData.tiersIssueYears,
			dataStorage: formattedDate,
			character: Number(inputData.behavior),
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

		console.log('FormSend', data);
		dispatch(addClient(data))
	}
	return (
		<form onSubmit={handleSubmit} className='text-white'>
				<div>
					<h3 className='text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2 text-orange-300 font-semibold'>Додати авто клієнта</h3>
				<div className='flex mb-3'>
				{/* ----------------------------------------Car_One------------------------------------------*/}
				<div className='mb-2 w-1/2 pr-5 border-r-[1px] border-gray-400'>
					<div className='flex'>
				<div className='w-1/2 mr-4'>
				<label className='block mb-1'>
					<span className='block mb-1'>Номер Авто</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='registrationNumber_1'/>
				</label>
				<label className='block mb-1'>
					<span className='block mb-1'>Назва Авто</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black'name='carModel_1'/>
				</label>
				<label className='block'>
					<span className='block mb-1'>Радіус колес</span>
					<div className='flex'>
					<select value={widthTire} onChange={handelOnChangeTireWidth} className='w-full mr-2 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightTire} onChange={handelOnChangeTireHeight} className='w-full mr-2 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusTire} onChange={handelOnChangeTireRadius} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black'>
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
						<p className='mb-1'>Об'єм робіт</p>
						{Array.from({ length: 4 }, (_, i) => (
							<div key={i} className='flex items-center w-full'>
							<p className='mr-2'>{i + 1}</p>
        <select key={i} onChange={(e) => handleServiceData_1(e, i)} className='w-full mb-[10.5px] h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black'>
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
					<span className='block mb-1'>Номер Авто_2</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black'name='registrationNumber_2'/>
				</label>
				<label className='block mb-1'>
					<span className='block mb-1'>Назва Авто_2</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='carModel_2'/>
				</label>
				<label className='block'>
					<span className='block mb-1'>Радіус колес</span>
					<div className='flex'>
					<select value={widthTire_2} onChange={handelOnChangeTireWidth_2} className='w-full mr-2 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightTire_2} onChange={handelOnChangeTireHeight_2} className='w-full mr-2 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusTire_2} onChange={handelOnChangeTireRadius_2} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black' >
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
						<p className='mb-1'>Об'єм робіт</p>
						{Array.from({ length: 4 }, (_, i) => (
							<div key={i} className='flex items-center w-full'>
							<p className='mr-2'>{i + 1}</p>
        <select key={i} onChange={(e) => handleServiceData_2(e, i)} className='w-full mb-[10.5px] h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black'>
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
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Загальна інформація</h3>
					<div className='flex'>
				<div className='w-1/2'>
				<label className='block mb-2 mr-5'>
					<span className='block'>Ім'я</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='name'/>
				</label>
				<label className='block mr-5 mb-2'>
					<span className='block'>Як людина</span>
					{/* <select value={behavior} onChange={handleOnChangeBehavior} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
					<option value="">Вибрати</option>
						{behaviorData.map(item => (
							<option key={item} value={item}>{item}</option>
						))}
					</select> */}
					<input onChange={handleOnChange} type="number" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='behavior'/>
				</label>
				<label className='block mb-2 mr-5'>
					<span className='block'> Недоліки авто</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='carFlaws'/>
				</label>
				</div>
				<div className='w-1/2 pl-5'>
				<label className='block mb-2'>
					<span className='block'>Телефон_1</span>
					<InputMask suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='phone_1'/>
				</label>
				<label className='block mb-2'>
					<span className='block'>Телефон_2</span>
					<InputMask suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='phone_2'/>
				</label>
				<label className='block mb-2'>
					<span className='block'>Телефон_3</span>
					<InputMask suppressContentEditableWarning mask="+38 (999) 999-99-99" placeholder="+38 (050) 500-50-05" onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='phone_3'/>
				</label>
				</div>
					</div>
				</div>

				{/* ---------------------------------Колеса під реалізацію-------------------------*/}
				<div className='mb-[20px]'>
				<h3 className='text-center text-[20px] border-b-[1px] border-gray-400 mb-[10px] pb-2'>Колеса під реалізацію</h3>
				<div className='flex'>
					<div className='w-1/2'>

			<div className='flex'>
		<label className='mb-2 mr-5'>
      <h2 className='mb-[5px]'>Выберите дату</h2>
      <DatePicker
		className='text-black pt-1 pb-1 pl-3 w-full rounded-md'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Формат даты, можно настроить по своему усмотрению
        placeholderText="Выберите дату"
      />
    	</label>
		 <label className='block mr-5'>
					<span className='block'>Марка</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tireBrend'/>
				</label>

		 	</div>
		
					<div className='flex'>
				<label className='block mr-5'>
					<span className='block'>Рік випуску</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tiersIssueYears'/>
				</label>
				<label className='block mb-2 mr-5'>
					<span className='block'>Недоліки колес</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tireFlawStore'/>
				</label>
					</div>
					</div>
					<div className='w-1/2'>
				<label className='block mb-2'>
					<span className='block'>Кількість та радіус колес</span>
					<div className='flex'>
					<label className='block mr-5'>
					<input placeholder='шт.' onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tiersValue'/>
				</label>
					<select value={widthStorage} onChange={handleOnChangeTireStorageWidth} className='w-full mr-4 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightStorage} onChange={handleOnChangeTireStorageHeight} className='w-full mr-4 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusStorage} onChange={handleOnChangeTireStorageRadius} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
				{/* <label className='block'>
					<span className='block'>Недоліки колес?</span>
					<input onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tireFlawStore'/>
				</label> */}
						<label className='block mb-2'>
					<span className='block'>Кількість та радіус колес_2</span>
					<div className='flex'>
					<label className='block mr-5'>
					<input placeholder='шт.' onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tiersValue_2'/>
				</label>
					<select value={widthStorage_2} onChange={handleOnChangeTireStorageWidth_2} className='w-full mr-4 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightStorage_2} onChange={handleOnChangeTireStorageHeight_2} className='w-full mr-4 h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black' >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusStorage_2} onChange={handleOnChangeTireStorageRadius_2} className='w-full h-[32px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black'>
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
				<div className='flex justify-center'>
				<button type='submit' className='pt-2 pb-2 pl-3 pr-3 bg-orange-400 rounded-md w-full hover:bg-orange-600 transition-all duration-200'>Додати до бази</button>
				</div>
			</form>
	);
};

export default SendFormData;