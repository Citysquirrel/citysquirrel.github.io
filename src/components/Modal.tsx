import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";

const Container = styled.div<{ width: string; height: string }>`
	@keyframes switchModalOn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	position: fixed;
	display: flex;
	flex-direction: column;
	left: calc(50vw - ${(props) => props.width}px / 2);
	top: calc(50vh - ${(props) => props.height}px / 2);
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	padding: 8px;
	background-color: white;
	border-radius: 8px;
	animation-name: switchModalOn;
	animation-duration: 0.5s;
	z-index: 2000;
	.exit-wrapper {
		position: absolute;
		top: 4px;
		right: 4px;
		font-size: 32px;
		width: 32px;
		height: 32px;
		line-height: 26px;
		background-color: transparent;
		cursor: pointer;
	}
`;

const Canvas = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 53;
	animation-name: switchModalOn;
	animation-duration: 0.5s;
`;

const Wrapper = styled.div`
	background-color: transparent;
`;

interface Props {
	width: string;
	height: string;
	element: JSX.Element;
	modal: boolean;
	setModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ width, height, element, modal, setModal }: Props) => {
	const modalOff = () => {
		setModal(false);
	};
	return (
		<>
			<Container width={width} height={height}>
				<div className="exit-wrapper" onClick={modalOff}>
					&times;
				</div>
				<Wrapper>{element}</Wrapper>
			</Container>
			<Canvas onClick={modalOff} />
		</>
	);
};

//? ModalContainer는 ModalCanvas 내부에 존재해야 함
export const ModalContainer = styled.div`
	width: 400px;
	height: 300px;
	background-color: white;
`;

export const ModalCanvas = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 9999;
	animation: 0.35s both;
`;
