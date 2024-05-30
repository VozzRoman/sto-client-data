import './App.css'
import 'normalize.css';
import { Route, Routes} from 'react-router';
import { Suspense, lazy, useEffect} from 'react';
import { useAppDispatch } from './hooks/reduxHooks';
import { fetchAllClients, fetchAllSoldTire, fetchAllTires } from './redux/operations';
import { useAuth } from './hooks/AuthContext';
import Loader from './components/Loader/Loader';

//----Suspens--------
const SelectDataPage = lazy(() => import('./pages/SelectDataPage'));
const LoginPage = lazy(() => import(('./pages/LoginPage')));
const ForgetPassword = lazy(() => import(('./pages/ForgetPassword')));
const SignupPage = lazy(() => import(('./pages/SignupPage')));
const HomePage = lazy(() => import(('./pages/HomePage')));
const Layout = lazy(() => import(('./components/Layout/Layout')));
const StoreLayout = lazy(() => import(('./components/StoreLayout/StoreLayout')));
const StoreTirePage = lazy(() => import(('./pages/StoreTirePage')));
const SoldStorePage = lazy(() => import(('./pages/SoldStorePage')));


function App() {
//Регистрация
	const {currentUser} = useAuth() ?? {};
	const dispatch = useAppDispatch();
//Загрузка кілиенти
	useEffect(() => {
		dispatch(fetchAllClients());
			
	},[dispatch, currentUser])
//Загрузка склад
	useEffect(() => {
		dispatch(fetchAllTires());
			
	},[dispatch, currentUser])
//Загрузка продание колеса
   useEffect(() => {
		dispatch(fetchAllSoldTire());
	},[dispatch])


	
  return (
<>
<Routes>
		<Route path='/' element={<Suspense fallback={<div className='w-screen h-screen flex items-center justify-center'><Loader/></div>}><SelectDataPage/></Suspense> }/>
        <Route path='/clientData' element={<Layout/> }>
          <Route index element={<HomePage/>}/>
        </Route>
		  <Route path='/tireStore' element={<StoreLayout/> }>
          <Route index element={<StoreTirePage/>} />
			 <Route path='/tireStore/statistic' element={<SoldStorePage/>}/>
        </Route>
		  		<Route path='/signin' element={<Suspense fallback={<div className='w-screen h-screen flex items-center justify-center'><Loader/></div>}><LoginPage/></Suspense>} />
		 	 	<Route path='/signup' element={<Suspense fallback={<div className='w-screen h-screen flex items-center justify-center'><Loader/></div>}><SignupPage/></Suspense> } />
				<Route path='/resetpassword' element={<Suspense fallback={<div className='w-screen h-screen flex items-center justify-center'><Loader/></div>}> <ForgetPassword/></Suspense>} />
</Routes>
</>
)
}

export default App
