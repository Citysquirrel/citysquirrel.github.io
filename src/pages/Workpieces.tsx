import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import usePreventScroll from "../functions/useScroll";
import { useDisclosure } from "../functions/useDisclosure";
import { ModalCanvas, ModalContainer } from "../components/Modal";

const Container = styled.main`
	clear: both;
	margin-top: 60px;
	animation: 1s 0.5s fadeIn;
	animation-fill-mode: both;
`;

const Table = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 4px;
	object-fit: cover;

	div {
		overflow: hidden;
	}

	img {
		width: 100%;
		border: 1px solid black;
	}
`;

const Workpieces = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Container>
			<Table>
				<div
					onClick={() => {
						onOpen();
					}}
				>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
				<div>
					<img src={`${process.env.PUBLIC_URL}/images/sample.png`} alt="sample" />
				</div>
			</Table>
			{isOpen ? <ImageModal onClose={onClose} /> : null}
		</Container>
	);
};

interface ImageModalProps {
	onClose: () => void;
}

function ImageModal({ onClose }: ImageModalProps) {
	usePreventScroll();

	return createPortal(
		<ModalCanvas onClick={onClose}>
			<ModalContainer
				onClick={(e) => {
					e.stopPropagation();
				}}
			></ModalContainer>
		</ModalCanvas>,
		document.getElementById("modal")!
	);
}

export default Workpieces;
