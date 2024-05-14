import React, { FC, useState } from 'react';
import Container from '../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const SignupPage:FC = () => {
const [email, setEmail] = useState<string>('');
const [password, setPassword] = useState<string>('');
const [confirmPassword, setConfirmPassword] = useState<string>('');

const [error, setError] = useState<string>('')
const [isLoading, setIsLoading] = useState<boolean>(false);
console.log(useAuth());
const {signup, currentUser} = useAuth() ?? {};
console.log(currentUser);
const navigate = useNavigate();
// const isLoading = false;
const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
	setEmail(e.target.value);
}
const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
	setPassword(e.target.value);
}
const handleOnChangeConfiremPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
	setConfirmPassword(e.target.value);
}

const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	if(password !== confirmPassword){
		console.log(password, confirmPassword)
		return setError('пароль не співпадає')
	}
try {
	setError('');
	setIsLoading(true);
		if(signup){
	await	signup(email, password);
	navigate('/signin')

	}
} catch (error) {
	setError('Неможу створити пароль')
}
	setIsLoading(false);
}

	return (
		<Container>
			<div className='h-screen flex items-center justify-center'>
				<form onSubmit={handelSubmit} className='max-w-[300px] w-full bg-slate-400 p-[20px] rounded-md'>
				<label className='block mb-1'>
					<span className='block text-[15px]'>Emial</span>
					<input value={email} onChange={handleOnChangeEmail} type="text" className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='email'/>
				</label>
				<label className='block mb-3'>
					<span className='block text-[15px]'>Password</span>
					<input value={password} onChange={handleOnChangePassword} type="password" className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='password'/>
				</label>
				<label className='block mb-3'>
					<span className='block text-[15px]'>Confirm password</span>
					<input value={confirmPassword} onChange={handleOnChangeConfiremPassword} type="password" className={`w-full bg-gray-300 rounded-md pt-1 text-[14px] pb-1 pl-3 text-black border-[1px] `} name='confirmPassword'/>
				</label>
				{error && <p className='text-red-600 m-2 text-[14px] text-center'>{error}</p>}
				<button disabled={isLoading} type='submit' className={`
				${isLoading ? "hover:bg-none" : "hover:bg-orange-600"}
				${isLoading ? "bg-slate-400" : "bg-orange-400 "}
				pt-1 pb-1 pl-3 pr-3 rounded-md w-1/2  transition-all duration-200 text-white w-full`}>{isLoading ? "Завантажую" : "Створити"}</button>
				<Link to='/signin' className='text-white text-center block mt-2 underline'>Вже є пароль</Link>
				</form>
			</div>
		</Container>
	);
};

export default SignupPage;