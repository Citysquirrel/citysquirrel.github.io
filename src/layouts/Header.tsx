import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useConsole } from "../functions";

const Container = styled.header<{ isTop: boolean }>`
	position: sticky;
	left: 0;
	top: 0;
	width: 100%;
	user-select: none;
	display: flex;
	align-items: center;
	height: 60px;
	/* background-color: var(--bg-menu); */
	background-color: ${(props) => (props.isTop ? "transparent" : "#e6f3fd99")};
	${(props) => (props.isTop ? "" : "backdrop-filter: blur(4px)")};
	animation: 1s fadeIn;
	animation-fill-mode: both;
	z-index: 1004;
	transition: all 0.3s;
	> progress {
		position: absolute;
		top: 60px;
		width: 100%;
		height: 3px;
		-webkit-appearance: none;
		transition: all 0.3s;
		opacity: ${(props) => (props.isTop ? "0" : "1")};

		::-webkit-progress-bar {
			background-color: ${(props) => (props.isTop ? "transparent" : "var(--gray-300)")};
		}
		::-webkit-progress-value {
			background: linear-gradient(to left, var(--soft-blue-800), var(--soft-blue-500));
		}
	}
`;

const Logo = styled.div`
	flex: auto;
	text-align: start;
	font-size: 1.25rem;
	font-weight: 600;
	padding-left: 48px;
	> a {
		padding: 8px 16px;
		text-decoration: var(--gray-500) dotted underline;
	}
	:hover > a {
		color: var(--gray-700);
		text-decoration-color: var(--soft-orange-800);
	}
`;

const Wrapper = styled.nav`
	display: flex;
	width: fit-content;
	margin: 0 48px;
	background-color: transparent;
	> a {
		flex: 1 0 auto;
		width: fit-content;
		font-size: 1.125rem;
		font-weight: 400;
		line-height: 3rem;
		margin: 0 16px;
		/* background-color: var(--bg-menu); */
		background-color: transparent;
		transition: all 0.3s;
		transform: rotateY("90deg");
		&.paged:after {
			border-bottom-color: var(--soft-blue-600);
			transform: scaleX(1) translateY(-8px);
		}
		:after {
			display: block;
			content: "";
			border-bottom: solid 2px var(--gray-900);
			transform: scaleX(0) translateY(-8px);
			transition: transform 0.25s ease-in-out;
		}
		:hover {
			:after {
				transform: scaleX(1) translateY(-8px);
			}
		}
	}
	.paged {
		color: var(--soft-blue-600);
	}
`;

export const Header = () => {
	const [isTop, setIsTop] = useState(true);
	const [scrollLocaY, setScrollLocaY] = useState(window.scrollY);
	const { pathname } = useLocation();
	const [page, setPage] = useState(pathname);

	const pageHeight = document.body.scrollHeight - window.innerHeight;

	const handleCurrentPage = (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
		setPage(key);
	};

	const pageInfo = [
		["/", "About"],
		["/workpieces", "Workpieces"],
		// ['/blog', 'Blog'],
	];

	useEffect(() => {
		setPage(pathname);
	}, [pathname]);

	useEffect(() => {
		//TODO: 스크롤 액트 훅으로 전환
		const handleScroll = () => {
			setScrollLocaY(window.scrollY);
			if (window.scrollY < 10) setIsTop(true);
			else setIsTop(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// 스크롤Y 최대값: document.body.scrollHeight - window.innerHeight
	return (
		<Container isTop={isTop}>
			{/* {scrollLocaY} */}
			<Logo>
				<a href="/">도시다람쥐.github.io</a>
			</Logo>
			<Wrapper>
				{pageInfo.map((v, i) => {
					return (
						<Link key={i} to={v[0]} className={`${page === v[0] ? "paged" : ""}`} onClick={handleCurrentPage(v[0])}>
							{v[1]}
						</Link>
					);
				})}
			</Wrapper>
			<progress value={scrollLocaY} max={pageHeight}></progress>
		</Container>
	);
};
