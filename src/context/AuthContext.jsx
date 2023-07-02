import { useContext, createContext, useEffect } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
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
	const logout = async () => {
		try {
			await signOut(auth);
			dispatch(setUserData({ accessToken: "" }));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			const displayName = currentUser?.displayName;
			const email = currentUser?.email;
			const photoURL = currentUser?.photoURL;
			const accessToken = currentUser?.accessToken;
			const uid = currentUser?.uid;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		});
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ loginWidthGoogle, loginWithEmail, registerWithEmail, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
