import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
	const { accessToken } = useSelector(state => state.auth.user);
	return accessToken ? children : <Navigate to='/' />;
};
