
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

function App() {
	const isAuthenticated = true;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllClients());
	},[dispatch])

  return (
<Routes>
{isAuthenticated ? (
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      ) : (
        // Если пользователь не авторизован, перенаправить на страницу регистрации
        <Route path='/' element={<LoginPage />} />
      )}
</Routes>
  )
}

export default App
