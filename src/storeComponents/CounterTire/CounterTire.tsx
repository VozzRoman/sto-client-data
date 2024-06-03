import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { counterTireRedux } from '../../redux/counterSlice/counterSlice';
import { addSoldTire, updateTire } from '../../redux/operations';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Loader from '../../components/Loader/Loader';

interface CounterTireProp {
	handleModaClose: () => void
}


const CounterTire: FC<CounterTireProp> = ({handleModaClose}) => {
	const [error, setError] = useState<string>('');
	const [success, setSuccess] = useState<string>('');
	const isLoading = useAppSelector(state => state.tireReducer.isLoading);

const value = useAppSelector(state => state.counterReducer.counter);
const dispatch = useAppDispatch();
const cuerrent = useAppSelector(state => state.tireReducer.current);

  const handlePlus = () => {
    dispatch(counterTireRedux(value !== Number(cuerrent?.counts) ? value + 1 : Number(cuerrent?.counts)))
  }

  const handleMinus = () => {
	dispatch(counterTireRedux(value > 0 ? value - 1 : 0))
  }

  const handelSell = async () => {
	if(value === 0) {
		return
	}
	const differance = Number(cuerrent?.counts) - value;
	if(cuerrent) {
		const newData = {
			...cuerrent,
			counts: differance,
		}
		const response = await dispatch(updateTire(newData))
		if(response.payload === 'rejectedUpdate') {
			setError('помилка!');
			setTimeout(() => {
				setError('');
			}, 5000)
		}
		
		const soldTire = {
			tireBrend: cuerrent.tireBrend,
			tireModel: cuerrent.tireModel,
			counts: value,
			tireSize: {
				width: cuerrent.tireSize.width,
				height: cuerrent.tireSize.height,
				radius: cuerrent.tireSize.radius,
			},
			revenue: value * (Number(cuerrent.outPrice) - Number(cuerrent.inPrice)),
			outPrice: value * Number(cuerrent.outPrice),
			soldData: new Date().toISOString().split('T')[0]
		}

		//add to sold storage---------
		await dispatch(addSoldTire(soldTire));
		//------
		setSuccess('продано');
		setTimeout(() => {
			setSuccess('');
			handleModaClose();

		}, 3000)
	}
  }

  return (
	<div className='flex items-center mt-5 mb-2 justify-between border-gray-500  border-b-[1px] pb-3 border-t-[1px] pt-3'>
    <div className='mr-2 flex'>
      <button onClick={handlePlus}><FaCirclePlus size={30}/></button>
      <p className='pl-3 pr-3 w-[34px]'>{value}</p>
      <button onClick={handleMinus}><FaCircleMinus size={30}/></button>
    </div>
	 <div>
		{isLoading && <Loader/>}
		<p className={`text-center max-sm:text-[16px] text-xl
		${error ? 'text-red-300' : 'text-orange-300'}
		`}>{error ? error : success}</p>
	 </div>
	 <button onClick={handelSell} className='bg-orange-500 ml-2 hover:bg-orange-400 transition-colors duration-300 h-[31px] p-2 flex items-center rounded-md'>Продать</button>
	 </div>
  );
};

export default CounterTire;