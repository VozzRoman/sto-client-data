
import './App.css'
import 'normalize.css';
// import Container from './components/Container/Container'
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/reduxHooks';
import { fetchAllClients } from './redux/operations';
import SignupPage from './pages/SignupPage';
// import { AuthProvider } from './hooks/AuthContext';
import PrivateRoute from './Routes/PrivateRoute';
import { useAuth } from './hooks/AuthContext';
import ForgetPassword from './pages/ForgetPassword';

function App() {
	const {currentUser} = useAuth() ?? {};
	
	const dispatch = useAppDispatch();

	useEffect(() => {
		if(currentUser){
			dispatch(fetchAllClients());
		} 
			
	},[dispatch, currentUser])

  return (



<Routes>
        <Route path='/' element={<PrivateRoute component={Layout} redirect='/signin'/> }>
          <Route index element={<PrivateRoute component={HomePage} redirect='/signin'/> } />
        </Route>
		  		<Route path='/signin' element={<LoginPage />} />
		 	 	<Route path='/signup' element={<SignupPage />} />
				  <Route path='/resetpassword' element={<ForgetPassword />} />
</Routes>



  )
}

export default App
