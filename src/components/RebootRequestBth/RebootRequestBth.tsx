
import { AiFillThunderbolt } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {fetchAllSoldTire} from "../../redux/operations";
import { filteredStoreValue, filteredValue } from "../../redux/filterSlice/filterSlice";
const RebootRequestBth = () => {

	const dispatch = useAppDispatch();

const handleReboot = () => {
	dispatch(filteredValue(''));
	dispatch(filteredStoreValue(''));
	dispatch(fetchAllSoldTire());

}


	return (
		<button onClick={handleReboot} className="p-[5px] mt-3 max-sm:mt-0 bg-orange-400 max-sm:ml-1 h-[30px] w-[30px] rounded-md ml-auto hover:bg-orange-600 transition-colors duration-300">
			<AiFillThunderbolt color="white" size={20}/>
		</button>
	);
};

export default RebootRequestBth;