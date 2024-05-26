import { useAppSelector } from "../../hooks/reduxHooks";
import SoldData from "../SoldData/StoreData";
import { SoldStorageI } from "../../types/types";
import { Link } from "react-router-dom";
import { useState } from "react";
import InfoModal from "../../components/InfoCardModal/InfoModal";
import AlertWindow from "../../components/AlertWindow/AlertWindow";
import { GiCarWheel } from "react-icons/gi";

const SoldTire = () => {
	const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
	const [soldTireId, setSoldTireId] = useState<number | null>(null);
	const soldStoreData = useAppSelector(state => state.soldreducer.soldTire);
	const totalSum = soldStoreData.reduce((acc: number, item: SoldStorageI) => acc + Number(item.outPrice), 0);
	const revenue = soldStoreData.reduce((acc: number, item: SoldStorageI) => acc + Number(item.revenue), 0);

				//AlertWindow
				const handelAlertWindowOpen = (value: number) => {
					setIsAlertOpen(true)
					document.body.style.overflow = 'hidden';
					setSoldTireId(value);
				}
				const handleAlertWindowClose = () => {
					setIsAlertOpen(false);
					document.body.style.overflow = 'auto';
				}
				//------------------
	return (
		<div>
			<div className=" bg-slate-400 rounded-r-md rounded-l-[50px] flex w-full mb-3">
			<Link to='/tireStore' className="text-[50px] flex items-center text-slate-700 hover:text-slate-900 transition-colors duration-300">
					<GiCarWheel/><p className="text-[14px] whitespace-nowrap text-white max-sm:hidden block ml-2">на склад</p>
			</Link>
			<div className="flex w-full items-center justify-end mr-[120px] max-sm:mr-2">
				<p className="text-white p-[5px] pl-[10px] pr-[10px] max-sm:pl-[5px] max-sm:pr-[5px] bg-opacity-35 rounded-md bg-slate-500 mr-3 max-sm:text-[14px]">Виторг: <span className="text-gray-800 font-semibold">{revenue}</span></p>
				<p className="text-white p-[5px] pl-[10px] pr-[10px] max-sm:pl-[5px] max-sm:pr-[5px] bg-opacity-35 rounded-md bg-slate-500 max-sm:text-[14px]">Всього: <span className="text-gray-800 font-semibold">{totalSum} гр</span></p>
			</div>
			</div>
				<table className='w-full'>
		<thead className='border-b-[1px] border-slate-300'>
			<tr className='text-center text-blue-900'>
			  <th className='pb-2 h-[33.5px]'>#</th>
			  <th className='h-[33.5px]' style={{textAlign: 'left'}}>Марка</th>
			  <th style={{textAlign: 'left'}} className='visible max-md:hidden pl-3 pr-3'>Модель</th>
			  <th className='visible max-md:hidden pl-3 pr-3'>Ш/В/Р</th>
			  <th style={{textAlign: 'center'}} className='visible max-md:hidden pl-3 pr-3'>Кількість</th>
			  <th style={{textAlign: 'center'}} className='visible max-md:hidden whitespace-nowrap pl-2 pr-2'>Сума</th>
			  <th style={{textAlign: 'left'}}>Дата</th>
			  <th></th>
			</tr>
		 </thead>
		 <tbody>
			{soldStoreData.map((item, index)=> (
				<SoldData handelAlertWindowOpen={handelAlertWindowOpen} key={item.id} item={item} index={index}
				/>
			))}

		 </tbody>
		</table>
		<InfoModal isOpen={isAlertOpen} handelModalClose={handleAlertWindowClose}>
				<AlertWindow clientId={soldTireId!} handleAlertWindowClose={handleAlertWindowClose}/>
		</InfoModal>
		</div>
	);
};

export default SoldTire;