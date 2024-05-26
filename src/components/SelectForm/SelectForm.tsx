import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { filteredStoreValue } from '../../redux/filterSlice/filterSlice';
import { tireHeight, tireWidth, tireRadius } from '../../selectedData/selectedData';
import { FiSearch } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";


const SelectForm: FC = () => {
const [widthTire, setWidthTire] = useState<string>('');
const [heightTire, setHeightTire] = useState<string>('');
const [radiusTire, setRadiusTire] = useState<string>('');
const [warnFrame, setWarnFrame] = useState<boolean>(false);


const dispatch = useAppDispatch();

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

	
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

if(widthTire === ''){
 return setWarnFrame(true);
}
if(heightTire === ''){
	return setWarnFrame(true);
}
if(radiusTire === ''){
	return setWarnFrame(true);
}


if(widthTire && heightTire && radiusTire){
	dispatch(filteredStoreValue({width: widthTire, height: heightTire, radius: radiusTire}))	
}
if(widthTire === '' && heightTire === '' && radiusTire === ''){
	dispatch(filteredStoreValue({width: '', height: '', radius: ''}))	
		}
		
}

const handleReset = () => {
	if(widthTire && heightTire && radiusTire){
		dispatch(filteredStoreValue({width: "", height: "", radius: ""}))	
			}
			if(widthTire === '' && heightTire === '' && radiusTire === ''){
	dispatch(filteredStoreValue({width: '', height: '', radius: ''}))	
		}
			setWidthTire('');
			setHeightTire('');
			setRadiusTire('');
			setWarnFrame(false);
		
}
	return (
		<form onSubmit={handleSubmit}
		className='mr-10 max-sm:mr-3 flex max-sm:block items-end max-w-[250px] w-[100%]'>
			<label className='block max-sm:mb-2'>
					<span className='block text-[15px] font-semibold max-sm:hidden'>Фільтр колес</span>
					<div className='flex'>
					<select value={widthTire} onChange={handelOnChangeTireWidth} className={`
					${warnFrame && widthTire === '' ? "border-red-400" : "border-transparent"}
					w-[60px] mr-2 h-[30px] text-[14px] bg-slate-200 rounded-md border-[1px] pt-1 pb-1 pl-1 text-black`} >
					<option value="">ш</option>
					{tireWidth.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={heightTire} onChange={handelOnChangeTireHeight} className={`
					${warnFrame && heightTire === '' ? "border-red-400" : "border-transparent"}
					w-full mr-2 h-[30px] text-[14px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`} >
					<option value="">в</option>
					{tireHeight.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					<select value={radiusTire} onChange={handelOnChangeTireRadius} className={`
					${warnFrame && radiusTire === '' ? "border-red-400" : "border-transparent"}
					w-full h-[30px] text-[14px] bg-slate-200 border-[1px] rounded-md pt-1 pb-1 pl-1 text-black`}>
					<option value="">р</option>
					{tireRadius.map((item, index) => (
							<option key={index} value={item}>{item}</option>
						))}
					</select>
					</div>
				</label>
				<button type='submit' className='ml-2 max-sm:ml-0 bg-orange-400 h-[29px] pl-2 pr-2 rounded-md text-white hover:bg-orange-600 transition-colors duration-300'><FiSearch size={25}/></button>
				<button type='button' onClick={handleReset} className='ml-2 bg-orange-400 h-[29px] pl-2 pr-2 rounded-md text-white hover:bg-orange-600 transition-colors duration-300'><TbRefresh size={25}/></button>
		</form>
	);
};

export default SelectForm;