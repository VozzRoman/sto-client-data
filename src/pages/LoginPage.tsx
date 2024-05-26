import React, { FC, useState } from 'react';
import Container from '../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import shinka from '../assets/image/shina.png';

const LoginPage:FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [eye, setEye] = useState<boolean>(false);
	
	const [error, setError] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const {login} = useAuth() ?? {};
	const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}
	const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}

	const handleEyePassword = () => {
		setEye(prev => !prev);
	}

	
	const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
	try {
		setError('');
		setIsLoading(true);
			if(login){
			await login(email, password);
			navigate('/');

		}
	} catch (error) {
		setError('Не вірний пароль або мило')
	}
		setIsLoading(false);
	}

	return (
		<Container>
			
			<div className='h-screen flex flex-col items-center justify-center'>
			<div className='mb-[10px] max-w-[300px] w-screen bg-slate-700  rounded-md p-[10px] flex'>
				<Link to='/' className='text-white w-full text-center underline hover:text-orange-300 transition-colors duration-300'>Вхід для персоналу</Link>
				
			</div>
				<form onSubmit={handelSubmit} className='max-w-[300px] w-full bg-slate-700 p-[20px] rounded-md opacity-[0.97]'>
			
				<label className='block mb-1'>
					<span className='block text-[15px] text-white'>Email</span>
					<input value={email} onChange={handleOnChangeEmail} type="text" className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='email'/>
				</label>
				<label className='block mb-3 relative'>
					<span className='block text-[15px] text-white'>Password</span>
					<input value={password} onChange={handleOnChangePassword} type={eye ? "text" : "password"} className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='password'/>
					<button onClick={handleEyePassword} type='button' className='absolute top-[30px] right-[10px]'>{eye ?  <FaRegEye/> : <FaRegEyeSlash/>}</button>
				</label>
				{error && <p className='text-red-600 m-2 text-[14px] text-center'>{error}</p>}
				
				<button disabled={isLoading} type='submit' className={`
				${isLoading ? "hover:bg-none" : "hover:bg-orange-600"}
				${isLoading ? "bg-slate-400" : "bg-orange-400 "}
				pt-1 pb-1 pl-3 pr-3 rounded-md w-1/2  transition-all duration-200 text-white w-full`}>{isLoading ? "Завантажую" : "Увійти"}</button>
				<Link to='/resetpassword' className='text-white text-center block mt-2 underline hover:text-orange-300 transition-colors duration-300'>Забув пароль</Link>
				</form>
				<div className='absolute z-[-1] opacity-90 w-[330px] h-[330px]'>
					<img src={shinka} alt="pic" />
				</div>
			</div>
		</Container>
	);
};

export default LoginPage;