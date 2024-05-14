

import React, { FC, useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import shinka from '../assets/image/shina.png';

const ForgetPassword:FC = () => {
	const [email, setEmail] = useState<string>('');

	
	const [error, setError] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');
	const {resetPassword, currentUser} = useAuth() ?? {};
	const navigate = useNavigate();
	console.log("Currr--->", currentUser);
	const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}

	
	const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	
	try {
		setMessage('');
		setError('');
		setIsLoading(true);
		if(email === ''){
			 setError('Введіть Email')
			 setIsLoading(false);
			 return
		}
			if(resetPassword){
			await resetPassword(email);
			setMessage('Перевір свою пошту щоб змінити пароль!')
			setTimeout(() => {
				navigate('/signin');
			}, 4000)
		}
	} catch (error) {
		setError('Не можу змінти щось з інтернетом')
	}
		setIsLoading(false);
	}

	useEffect(() => {
		if(email !== ''){
			setError('');
		}
	}, [email])

	return (
		<Container>
			<div className='h-screen flex items-center justify-center'>
				<form onSubmit={handelSubmit} className='max-w-[300px] w-full bg-slate-400 p-[20px] rounded-md opacity-[0.97]'>
				<label className='block mb-2'>
					<span className='block text-[15px]'>Email</span>
					<input value={email} onChange={handleOnChangeEmail} type="text" className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='email'/>
				</label>
				{error && <p className='text-red-600 m-2 text-[14px] text-center'>{error}</p>}
			
				 {message && <p className='text-center bg-green-600 p-2 rounded-md text-white'>Перевір свою пошту щоб змінити пароль!</p>}
				<button disabled={isLoading} type='submit' className={`
				${isLoading ? "hover:bg-none" : "hover:bg-orange-600"}
				${isLoading ? "bg-slate-400" : "bg-orange-400 "}
				pt-1 pb-1 pl-3 pr-3 rounded-md w-1/2  mt-2 transition-all duration-200 text-white w-full`}>{isLoading ? "Завантажую" : "Змінити пароль"}</button>
				<Link to='/signin' className='text-white text-center block mt-2 underline'>Повернутись до логіну</Link>
				
				</form>
				<div className='absolute z-[-1] opacity-90 w-[330px] h-[330px]'>
					<img src={shinka} alt="pic" />
				</div>
			</div>
		</Container>
	);
};

export default ForgetPassword;