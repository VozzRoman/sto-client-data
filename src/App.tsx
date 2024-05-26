import './App.css'
import 'normalize.css';
import { Route, Routes} from 'react-router';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useEffect} from 'react';
import { useAppDispatch } from './hooks/reduxHooks';
import { fetchAllClients, fetchAllSoldTire, fetchAllTires } from './redux/operations';
import SignupPage from './pages/SignupPage';
import { useAuth } from './hooks/AuthContext';
import ForgetPassword from './pages/ForgetPassword';
import SelectDataPage from './pages/SelectDataPage';
import StoreLayout from './components/StoreLayout/StoreLayout';
import StoreTirePage from './pages/StoreTirePage';
import SoldStorePage from './pages/SoldStorePage';

function App() {
	const {currentUser} = useAuth() ?? {};
	const dispatch = useAppDispatch();



	useEffect(() => {
		dispatch(fetchAllClients());
			
	},[dispatch, currentUser])

	useEffect(() => {
		dispatch(fetchAllTires());
			
	},[dispatch, currentUser])
   useEffect(() => {
		dispatch(fetchAllSoldTire());
	},[dispatch])
	
  return (
<>
<Routes>
		<Route path='/' element={<SelectDataPage/>}/>
        <Route path='/clientData' element={<Layout/> }>
          <Route index element={<HomePage/>}/>
        </Route>
		  <Route path='/tireStore' element={<StoreLayout/> }>
          <Route index element={<StoreTirePage/>} />
			 <Route path='/tireStore/statistic' element={<SoldStorePage/>}/>
        </Route>
		  		<Route path='/signin' element={<LoginPage />} />
		 	 	<Route path='/signup' element={<SignupPage />} />
				<Route path='/resetpassword' element={<ForgetPassword />} />
</Routes>
</>
)
}

export default App
