import { useContext, createContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
} from "firebase/auth";
import { setUserData } from "../store/Slices/authSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const dispatch = useDispatch();
	const loginWidthGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			const { displayName, email, photoURL, accessToken, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		} catch (error) {
			console.log(error);
		}
	};
	const loginWidthFacebook = async () => {
		try {
			const provider = new FacebookAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			const { displayName, email, photoURL, accessToken, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		} catch (error) {
			console.log(error);
		}
	};

	const loginWithEmail = async (inputEmail, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, inputEmail, password);
			const { displayName, email, photoURL, accessToken, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		} catch (error) {
			console.log(error);
		}
	};

	const registerWithEmail = async (inputEmail, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, inputEmail, password);
			const { displayName, email, photoURL, accessToken, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ loginWidthGoogle, loginWithEmail, registerWithEmail, loginWidthFacebook }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
