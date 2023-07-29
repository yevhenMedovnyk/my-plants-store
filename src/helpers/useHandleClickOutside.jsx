import { useEffect } from "react";

export const useHandleClickOutside = (ref, secondRef, set) => {
	useEffect(() => {
		const handleClickOutside = e => {
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
