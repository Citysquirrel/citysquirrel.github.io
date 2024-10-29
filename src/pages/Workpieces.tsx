import { useEffect, useState } from "react";
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

const SubMenu = styled.div`
	position: sticky;
	width: 200px;
	height: calc(-64px + 100vh);
	top: 63px;
	left: 0;
	padding: 36px 16px;
	user-select: none;
	> .submenu-wrapper {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
`;

const MenuList = styled.div`
	border-radius: 0.375rem 0.125rem;
	padding-block: 2px;
	cursor: pointer;
	transition: all 0.3s;
	:hover {
		background-color: var(--soft-blue-300);
	}
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
	const [currentId, setCurrentId] = useState(1);

	const list = [
		{
			id: 1,
			title: "코딩 학습 플랫폼",
			children: [],
		},
		{
			id: 2,
			title: "스텔카운트",
			children: [],
		},
	];

	return (
		<>
			<SubMenu>
				<div className="submenu-wrapper">
					{list.map((obj) => (
						<MenuList
							key={obj.id}
							onClick={() => {
								setCurrentId(obj.id);
							}}
						>
							{obj.title}
						</MenuList>
					))}
				</div>
			</SubMenu>
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
		</>
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
