import {useContext, createContext, useEffect} from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import {setUserData} from '../store/Slices/authSlice';
import {useDispatch} from 'react-redux';
import {auth} from '../firebase';
import {updateProfile} from 'firebase/auth';

type ChildrenProps = {
	children: string | JSX.Element | JSX.Element[];
};

const AuthContext = createContext({});

export const AuthContextProvider = ({children}: ChildrenProps) => {
	const dispatch = useDispatch();
	const loginWidthGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({
				prompt: 'select_account',
			});
			const userCredential = await signInWithPopup(auth, provider);
			const {displayName, email, photoURL, uid} = userCredential.user;
			dispatch(setUserData({displayName, email, photoURL, uid}));
		} catch (error) {
			console.log(error);
		}
	};

	const loginWithEmail = async (inputEmail: string, password: string) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, inputEmail, password);
			console.log(userCredential.user);
			const {displayName, email, photoURL, uid} = userCredential.user;
			dispatch(setUserData({displayName, email, photoURL, uid}));
		} catch (error) {
			console.log(error);
		}
	};

	const registerWithEmail = async (inputEmail: string, password: string, username: string) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, inputEmail, password);
			//@ts-ignore
			await updateProfile(auth.currentUser, {
				displayName: username,
			});

			const {displayName, email, photoURL, uid} = userCredential.user;
			dispatch(setUserData({displayName, email, photoURL, uid}));
		} catch (error) {
			console.log(error);
		}
	};
	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				const displayName = currentUser.displayName;
				const email = currentUser.email;
				const photoURL = currentUser.photoURL;
				const uid = currentUser.uid;
				dispatch(setUserData({displayName, email, photoURL, uid}));
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<AuthContext.Provider value={{loginWidthGoogle, loginWithEmail, registerWithEmail, logout}}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
