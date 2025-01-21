import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useBodyColor, useLabelAllCheckbox, useScreenBorder } from "../functions";
import styleForMarkdown from "../lib/StyleForMarkdown";
import note from "../markdown/Note.md";

const Main = styled.main`
	margin-top: 60px;
	margin-bottom: 60px;
	font-size: 18px;
	animation: 0.2s 0.45s fadeIn;
	animation-fill-mode: both;
	min-height: calc(100vh - 64px - 48px);
	max-width: 1280px;

	${styleForMarkdown}
`;

const url = "https://raw.githubusercontent.com/Citysquirrel/citysquirrel.github.io/main/src/markdown/About.md";

export default function Home() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/blog')
	})
	return <></>
	// const [body, setBody] = useState("");
	// useBodyColor("#fdfdfd");
	// useScreenBorder(
	// 	{
	// 		top: "4px",
	// 		right: "4px",
	// 		bottom: "4px",
	// 		left: "4px",
	// 		container: "4px",
	// 	},
	// 	"#6caaef"
	// );
	// useLabelAllCheckbox(body);
	// useEffect(() => {
	// 	fetch(url, {}) // CORB blocked with MIME type text/plain!
	// 		.then((res) => res.text())
	// 		.then((text) => setBody(text));
	// }, []);
	// return (
	// 	<Main>
	// 		<Markdown>{body}</Markdown>
	// 	</Main>
	// );
}
