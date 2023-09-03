import {  useEffect } from "react";



export const useHandleClickOutside= (ref: any, secondRef: any, set: any) => {
	useEffect(() => {
		const handleClickOutside = (e: any) => {
			let path = e.composedPath().includes(ref?.current);
			let secondPath = e.composedPath().includes(secondRef?.current);
			if (!path && !secondPath) {
				set(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);
		return () => document.body.removeEventListener("click", handleClickOutside);
	}, []);
};
