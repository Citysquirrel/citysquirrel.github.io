import styled from "styled-components";

import arc from "../lib/arc.svg";
import donut from "../lib/donut.svg";

const Container = styled.div`
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	> img {
		height: 128px;
		position: fixed;
		animation: rotate 1s ease infinite;
		transform-origin: 50% 50%;
		opacity: 0.6;
	}
`;

const Loading = () => {
	return (
		<Container>
			<svg
				width="100"
				height="100"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="#3498db"
				strokeWidth="10"
			>
				<circle cx="50" cy="50" r="40" strokeOpacity="0.3" />
				<circle
					cx="50"
					cy="50"
					r="40"
					strokeDasharray="62.83185307179586 62.83185307179586"
					strokeDashoffset="62.83185307179586"
				/>
			</svg>
			{/* <img src={'images/loading.png'} alt="Loading" /> */}
		</Container>
	);
};

export default Loading;
