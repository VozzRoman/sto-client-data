import { FC, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { removeClient } from '../../redux/operations';
import Loader from '../Loader/Loader';

interface AlertWindowProp {
	clientId: number;
	handleAlertWindowClose: () => void;
}

const AlertWindow: FC<AlertWindowProp> = ({clientId, handleAlertWindowClose}) => {
	const [error, setError] = useState<string>('');
const isLoading = useAppSelector(state => state.clientReducer.isLoading);
const dispatch = useAppDispatch();

	const handleDelte = async () => {
		if (clientId !== undefined) {
		const response = await	dispatch(removeClient(String(clientId)));
		if(response.payload === 'rejectedRemove'){
			setError('Неможливо видалити щось з сервером!')
			setTimeout(() => {
				setError('');
			}, 3000)
			return
		}
			handleAlertWindowClose();
		 }
	}


	return (
		<div className='bg-red-600 p-5 rounded-md  w-[360px]'>
			<div>
				<p className='text-white mb-3 text-center'>{error || isLoading ? error || "Завантажую..." : "Ви дійсно хочете видалити цього клієнта?"}</p>
			</div>
			<div className='flex justify-center'>
			{isLoading ? <Loader/> : (<><button onClick={handleDelte} type="button" className="btn btn-warning w-[50px] mr-[10px] text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600">Так</button>
			<button onClick={handleAlertWindowClose} type="button" className="btn btn-warning w-[50px]  mr-[10px] text-white border-orange-400 bg-orange-400 hover:bg-orange-600 hover:border-orange-600">Ні</button></>)}
			</div>
		</div>
	);
};

export default AlertWindow;