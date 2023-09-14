import {FC} from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {IChildren} from '../types/IChildren';
import {useAppSelector} from '../hooks/redux';

export const RequireAuth: FC<IChildren> = ({children}) => {
	const {uid} = useAppSelector((state) => state.auth.user);
	return uid ? children : <Navigate to="/" />;
};
