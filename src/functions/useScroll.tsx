import { useEffect } from "react";

export default function usePreventScroll() {
	useEffect(() => {
		document.body.classList.add("prevent-scroll");
		return () => {
			document.body.classList.remove("prevent-scroll");
		};
	}, []);
	return;
}
