import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import { tireHeight, tireWidth, tireRadius, rating, speedIndex, selectOwner } from '../../selectedData/selectedData';
import { filteredValue } from '../../redux/filterSlice/filterSlice';
import { StokeInputData} from '../../types/types';
import Loader from '../../components/Loader/Loader';
import { MdOutlineClose } from 'react-icons/md';
import { updateTire } from '../../redux/operations';



interface StoreUpdateDataProp {
	isOpen: boolean;
	handelModalClose: () => void;
}


const StoreUpdateData:FC<StoreUpdateDataProp> = ({isOpen, handelModalClose}) => {
const isLoading = useAppSelector(state => state.tireReducer.isLoading);
const cuerrent = useAppSelector(state => state.tireReducer.current);
const [inputData, setInputData] = useState<StokeInputData>({
		tireModel: "",
		tireBrend: "",
		issueYear: "",
		clientPhone: "",
		counts: "",
		inPrice: "",
		clientName: "",
		outPrice: "",
		tireNotes: "",
		loadIndex: "",
	})

const [error, setError] = useState<string>('');

const [success, setSuccess] = useState<string>('');

//Owner
const [isOwner, setIsOwner] = useState<string>("");
//Rating
const [isRating, setIsRating] = useState<string>("");
const [isSpeedIndex, setIsSpeedIndex] = useState<string>('');
//tireStorage
const [widthStorage, setWidthStorage] = useState<string>('');
const [heightStorage, setHeightStorage] = useState<string>('');
const [radiusStorage, setRadiusStorage] = useState<string>('');

//HideOwnerWindow
const [hideOwnerForm, setHideOwnerForm] = useState<boolean>(false);




const dispatch = useAppDispatch();
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setInputData(prev => {
	return {...prev, [e.target.name]: e.target.value}
	})
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
		//RatingSelect
		const handleSelectRating = (e:React.ChangeEvent<HTMLSelectElement>) => {
			setIsRating(e.target.value);
		}
		//SpeedIndex
		const handleSelectSpeedIndex = (e:React.ChangeEvent<HTMLSelectElement>) => {
			setIsSpeedIndex(e.target.value);
		}
		//SelectOwner
		const handleSelectOwner = ((e:React.ChangeEvent<HTMLSelectElement>) => {
			setIsOwner(e.target.value)
			setSuccess('')
		})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setError('');
		e.preventDefault();
		const data = {
			tireModel: inputData.tireModel,
		tireBrend: inputData.tireBrend,
		issueYear: inputData.issueYear,
		clientPhone: inputData.clientPhone,
		counts: Number(inputData.counts),
		inPrice: Number(inputData.inPrice),
		clientName: inputData.clientName,
		outPrice: Number(inputData.outPrice),
		tireNotes: inputData.tireNotes,
		loadIndex: inputData.loadIndex,
		tireSize: {
			width: widthStorage,
			height: heightStorage,
			radius: radiusStorage,
		},
		tireSpeed: isSpeedIndex,
		rating: isRating,
		tireOwner: isOwner,
		id: cuerrent?.id,
		dealDate: cuerrent?.dealDate
		}

		if(inputData.tireBrend === ''){
			setSuccess('Введіть Марку');
			return
		}
		if(inputData.tireModel === ''){
			setSuccess('Введіть Модель');
			return
		}
		if(inputData.issueYear === ''){
			setSuccess('Введіть рік випуску колес');
			return
		}
		if(inputData.counts === '') {
			return setSuccess('Введіть кількість колес');
		}
		if(widthStorage === '') {
			return setSuccess('Введіть довжину колес');
		}
		if(heightStorage === '') {
			return setSuccess('Введіть ширину колес');
		}
		if(radiusStorage === '') {
			return setSuccess('Введіть радіус колес');
		}

		if(inputData.loadIndex === ''){
			return setSuccess('Введіть нвантаження колес');
		}

		if(isSpeedIndex === ''){
			return setSuccess('Введіть швидкість колес');
		}
		if(isRating === ''){
			return setSuccess('Введіть рейтинг колес');
		}
		if(inputData.inPrice === ''){
			return setSuccess('Введіть вхідну ціну');
		}
		if(inputData.outPrice === ''){
			return setSuccess('Введіть ціну продажу');
		}

		//Если вибрали Власник
		 if(isOwner !== selectOwner[0]){
			if(inputData.clientName === ''){
				return setSuccess('Введіть ім я власника');
			}
			if(inputData.clientPhone === ''){
				return setSuccess('Введіть телефон власника');
			}
		 }

		//если вибрал на сохранение колеса
		const response = await dispatch(updateTire(data));
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
			tireModel:'',
			tireBrend:'',
			issueYear:'',
			clientPhone:'',
			counts: '',
			inPrice: '',
			clientName:'',
			outPrice: '',
			tireNotes: '',
			loadIndex:'',
			// dealDate:'',
		})

	
		setWidthStorage('');
		setHeightStorage('');
		setRadiusStorage('');
		setIsRating('');
		setIsSpeedIndex('');
		dispatch(filteredValue(''));
			
	}

	useEffect(() => {
		if (cuerrent) {
			 setInputData({
				  tireModel: cuerrent.tireModel || '',
				  tireBrend: cuerrent.tireBrend || '',
				  issueYear: cuerrent.issueYear || '',
				  clientPhone: cuerrent.clientPhone || '',
				  counts: cuerrent.counts || '',
				  inPrice: cuerrent.inPrice || '',
				  clientName: cuerrent.clientName || '',
				  outPrice: cuerrent.outPrice || '',
				  tireNotes: cuerrent.tireNotes || '',
				  loadIndex: cuerrent.loadIndex || '',
			 });

			 setIsOwner(cuerrent.tireOwner || '');
			 setIsRating(cuerrent.rating || '');
			 setIsSpeedIndex(cuerrent.tireSpeed || '');
			 setWidthStorage(cuerrent.tireSize?.width || '');
			 setHeightStorage(cuerrent.tireSize?.height || '');
			 setRadiusStorage(cuerrent.tireSize?.radius || '');
		}
  }, [cuerrent]);

	useEffect(() => {
		for(const key in inputData){
			if(inputData[key] !== ""){
				 setSuccess('');
				 return
			}
		}

	},[inputData, widthStorage, heightStorage, radiusStorage, isRating, isSpeedIndex])

	useEffect(() => {
		if(isOwner !== selectOwner[0] ) {
			setHideOwnerForm(true);
		} else {
			setHideOwnerForm(false);
		}
		
	}, [isOwner])



	
	return (
		<div className={`
		${isOpen ? "scale-1" : "scale-0"}
		relative bg-slate-600 p-[30px] max-[840px]:p-[15px] max-w-[800px] w-[100%] rounded-md transition-all duration-500 ease-in-out`}>
		<button className='absolute top-0 right-0 z-50 m-4 max-sm:right-[-10px] max-sm:top-[-10px]' 
		onClick={handelModalClose}>
			<MdOutlineClose className='fill-orange-500 hover:fill-orange-400 transition:fill duration-300' 
			size={25}/>
		</button>
				<form onSubmit={handleSubmit} className='text-white'>
				<div>
					<div className='flex items-start border-b-[1px] mb-2'>
					<h3 className='text-[20px] border-gray-400 mr-[10px] mb-[10px] text-orange-300 max-[840px]:text-[17px] whitespace-nowrap font-semibold'>Оновити дані</h3>
					<label className='block mr-5'>
					<select value={isOwner} onChange={handleSelectOwner} className={`
					w-full text-[14px] mr-2 h-[29px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-3 max-sm:pl-1 max-sm:mr-0 text-black`} >
					<option value=""></option>
					{selectOwner.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
			</label>
			</div>
				<div className='flex mb-1'>
		
				</div>
				</div>
	
				{/* ---------------------------------Колеса-------------------------*/}
				<div className=''>
				<div className='flex max-[840px]:block flex-wrap'>
					<div className='w-1/2 max-[840px]:w-full'>

			<div className='flex mb-2'>
		 <label className='block mr-5 max-[840px]:w-1/2'>
					<span className={`
					
					block text-[15px] text-red-200`}>Марка</span>
					<input value={inputData.tireBrend} onChange={handleOnChange} type="text" className={`
					${success === "Введіть Марку" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='tireBrend'/>
			</label>
			<label className='block mr-5 max-[840px]:mr-0 max-[840px]:w-1/2'>
					<span className={`
					
					block text-[15px] text-red-200`}>Модель</span>
					<input value={inputData.tireModel} onChange={handleOnChange} type="text" className={`
					${success === "Введіть Модель" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='tireModel'/>
			</label>

		 	</div>
		
					<div className='flex'>

				<label className='block mr-5 w-1/2 max-sm:w-20'>
					<span className={`
				
					block text-[15px] text-red-200`}>Рік</span>
					<input value={inputData.issueYear} onChange={handleOnChange} type="text" className={`
					${success === "Введіть рік випуску колес" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='issueYear'/>
				</label>
				<label className='block mb-2 mr-5 w-full max-[840px]:mr-0 max-[840px]:w-full'>
					<span className={`
				
					block text-[15px] text-red-200`}>Шт. та розмір</span>
					<div className='flex'>
					<label className='block mr-2'>
					<input value={inputData.counts} placeholder='шт.' onChange={handleOnChange} type="text" className={`
					${success === "Введіть кількість колес" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='counts'/>
				</label>
					<select value={widthStorage} onChange={handleOnChangeTireStorageWidth} className={`
					${success === "Введіть довжину колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] mr-2 h-[29px] border-[1px] bg-slate-200 rounded-md pt-1 pb-1 pl-1 text-black`} >
					<option value="">/</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightStorage} onChange={handleOnChangeTireStorageHeight} className={`
					${success === "Введіть ширину колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] mr-2 h-[29px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`} >
					<option value="">/</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusStorage} onChange={handleOnChangeTireStorageRadius} className={`
					${success === "Введіть радіус колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] h-[29px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`}>
					<option value="">/</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
					</div>
					</div>
					<div className='w-1/2 max-[840px]:w-full'>
					<div className='flex'>
				<label className='block mb-2 max-[840px]:w-1/2'>
					<span className={`
				
					block text-[15px] whitespace-nowrap text-red-200`}>Індекс</span>
					<div className='flex'>
					<label className='block mr-2'>
					<input value={inputData.loadIndex} placeholder='кг' onChange={handleOnChange} type="text" className={`
					${success === "Введіть нвантаження колес" ? "border-red-500" : "border-none"}
					bg-gray-300 max-w-[70px] w-screen text-[14px] border-[1px] rounded-md pt-1 pb-1 pl-3 text-black`} name='loadIndex'/>
				</label>
					<select value={isSpeedIndex} onChange={handleSelectSpeedIndex} className={`
					${success === "Введіть швидкість колес" ? "border-red-500" : "border-none"}
					text-[14px] mr-4 max-w-[98px] w-screen h-[29px] border-[1px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black`} >
					<option value=""></option>
					{speedIndex.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>

					</div>
				</label>
				<label className='block mb-2 w-1/2'>
					<span className={`
				
					block text-[15px] text-red-200`}>Рейтинг</span>
					<div className=''>
					<label className='block'>
					<select value={isRating} onChange={handleSelectRating} className={`
					${success === "Введіть рейтинг колес" ? "border-red-500" : "border-none"}
					w-full text-[14px] mr-4 h-[29px] border-[1px] bg-slate-200 rounded-md pt-1 pb-1 pl-3 text-black`} >
					<option value=""></option>
					{rating.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
				</label>
					</div>
				</label>
					</div>
					<div className='flex'>
					<label className='block mr-5 w-1/2'>
					<span className='block text-[15px] text-red-200'>Ціна вхідна</span>
					<input value={inputData.inPrice} onChange={handleOnChange} type="text" className={`
					${success === "Введіть вхідну ціну" ? "border-red-500" : "border-none"}
					bg-gray-300 w-full text-[14px] h-[29px] rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='inPrice'/>
					</label>
					<label className='block w-1/2'>
					<span className='block text-[15px] text-red-200'>Ціна продажу</span>
					<input value={inputData.outPrice} onChange={handleOnChange} type="text" className={`
					${success === "Введіть ціну продажу" ? "border-red-500" : "border-none"}
					bg-gray-300 w-full text-[14px] h-[29px] rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='outPrice'/>
					</label>
					</div>
					</div>
				</div>
				</div>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Замітки для колес</span>
					<input value={inputData.tireNotes} onChange={handleOnChange} type="text" className='bg-gray-300 w-full rounded-md pt-1 pb-1 pl-3 text-black' name='tireNotes'/>
				</label>
							{/*------------------------------ Дані власника ------------------------- */}
							{hideOwnerForm && <div className='mb-2'>
				<h3 className='text-center text-[16px] border-b-[1px] border-gray-400 mb-[7px]  mt-[20px] pb-2'>Дані власника</h3>
					<div className='flex'>
				<div className='w-1/2'>
					<div className='flex'>
				<label className='block mr-5 w-full'>
					<span className='block text-[15px] text-red-200'>Ім'я</span>
					<input value={inputData.clientName} onChange={handleOnChange} type="text" className={`
					bg-gray-300 w-full text-[14px] rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='clientName'/>
				</label>
					</div>
				</div>
				<div className='w-1/2 pl-5'>
				<label className='block mb-2'>
					<span className='block text-[15px] text-red-200'>Телефон</span>
					<InputMask value={inputData.clientPhone} suppressContentEditableWarning mask="9999999999" placeholder="0505005005" onChange={handleOnChange} type="text" className={`
					${success === "Введіть телефон кліента" ? "border-red-500" : "border-none"}
					bg-gray-300 text-[14px] w-full rounded-md border-[1px] pt-1 pb-1 pl-3 text-black`} name='clientPhone'/>
				</label>
				<div className='flex justify-between'>
				</div>
				</div>
					</div>
							</div>}

				<div className='flex mt-3 justify-start items-center max-sm:block'>	
				<button disabled={isLoading} type='submit' className={`
				${isLoading ? "hover:bg-none" : "hover:bg-orange-600"}
				${isLoading ? "bg-slate-400" : "bg-orange-400 "}
				pt-1 pb-1 pl-3 pr-3 rounded-md  transition-all duration-200 max-sm:w-full`}>{isLoading ? "Завантажую" : "Оновити"}</button>
				{isLoading && <div className='w-1/2 flex justify-center max-sm:w-full max-sm:mt-[10px]'><Loader/></div>}
				<p className={`
				${error ? 'text-red-300 ' : 'text-orange-300'}
				text-[16px] mr-[40px] font-semibold text-center w-1/2 max-sm:w-full max-sm:mr-0  max-sm:mt-2`}>{error ? error : success }</p>
				</div>
			</form>
		</div>
	);
};

export default StoreUpdateData;