
import { FC } from 'react';
import { useAuth } from '../hooks/AuthContext'; 
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps<T = {}> {
	redirect?: string;
	component: React.ComponentType<T>;
 }

const PrivateRoute: FC<PrivateRouteProps> = ({redirect = "/", component: Component}) => {
	const {currentUser} = useAuth() ?? {};
	return !currentUser ? <Navigate to={redirect}/> : <Component/>
};

export default PrivateRoute;