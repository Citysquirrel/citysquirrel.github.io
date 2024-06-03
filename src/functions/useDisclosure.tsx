import { useState } from "react";

export function useDisclosure() {
	const [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState(0);
	const [state, setState] = useState("");
	const onOpen = (type: number = 0, fbState?: string) => {
		setModalType(type);
		fbState && setState(fbState);
		setIsOpen(true);
	};
	const onClose = () => {
		setIsOpen(false);
	};

	return { isOpen, onOpen, onClose, modalType, setModalType, state };
}
