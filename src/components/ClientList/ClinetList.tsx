import { FC } from 'react';
import CLient from '../Client/CLient';
import { useAppSelector } from '../../hooks/reduxHooks';

const ClinetList:FC = () => {

	const clientData = useAppSelector(state => state.clientReducer.clients);
	const filteredClientData = useAppSelector(state => state.clientReducer.filtered);
	console.log("Data", clientData);

	const renderCLients = () => {
		if(filteredClientData.length <= 0) {
			return (
				<tbody className="">
				{clientData.map((item, index) => {
						return <CLient key={index} item={item} index={index}/>
				})}
			 </tbody>
			)

		} else {
			return (
				<tbody className="">
				{filteredClientData.map((item, index) => {
						return <CLient key={index} item={item} index={index}/>
				})}
			 </tbody>
			)

		}
	}

	return (
		<div className="table-box">
		<table className="table">
		<thead>
			<tr>
			  <th scope="col">#</th>
			  <th align="center" scope="col">Номер авто</th>
			  <th scope="col">Назва авто</th>
			  <th scope="col">Радіус</th>
			  <th scope="col">Телефон</th>
			  <th scope="col">Ім'я</th>
			  <th scope="col">Як людина</th>
			  <th scope="col"></th>
			</tr>
		 </thead>
		 {/* <tbody className="">
			{clientData.map((item, index) => {
					return <CLient key={index} item={item} index={index}/>
			})}
		 </tbody> */}
		 {renderCLients()}
		</table>
	</div>
	);
};

export default ClinetList;