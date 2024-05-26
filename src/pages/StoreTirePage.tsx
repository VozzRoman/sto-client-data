import { FC } from "react";
import TiresList from "../storeComponents/TiresList/TiresList";

const StoreTirePage:FC = () => {
	return (
		<div className="pt-[5px] pb-[40px]">
			<TiresList/>
		</div>
	);
};

export default StoreTirePage;