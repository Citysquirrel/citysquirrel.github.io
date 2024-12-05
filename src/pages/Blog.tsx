import { useEffect, useState } from "react";
import { getIssues, useBodyColor } from "../functions";
import { Endpoints } from "@octokit/types";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Article, Issue, SideNav } from "../components/blog";

type listUserReposIssuesResponse = Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export interface IBlogProps {
	data: listUserReposIssuesResponse | null;
	isLoading: boolean;
}

// 840px 기준으로 sidebar가 이동해야함
const Container = styled.main`
	clear: both;
	margin-top: 60px;
	animation: 0.2s 0.5s fadeIn;
	animation-fill-mode: both;
`;

const Blog = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<listUserReposIssuesResponse | null>(null);
	//! 아마 사용되지 않을 상태값. 이후 삭제요망
	const [numbers, setNumbers] = useState<number[]>([]);
	const { number } = useParams();
	const article: listUserReposIssuesResponse | null | undefined = data?.filter(
		(issue) => issue.number === Number(number)
	);

	console.log("article: ", article);

	/**
	 * @constant 글 작성자를 특정합니다. string[]
	 */
	const AUTHOR = ["Citysquirrel"];

	useBodyColor("#f5f5f5");

	useEffect(() => {
		setIsLoading(true);
		getIssues()
			.then((res) => {
				const onlyBlogging = res.data.filter(
					(issue) => issue.title.includes("[BLOG]") && AUTHOR.includes(issue.user?.login!)
				);
				setData(onlyBlogging);
				setNumbers(onlyBlogging.map((issue) => issue.number));
				setIsLoading(false);
			})
			.catch((err) => console.log("Network Error: ", err));
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<SideNav data={data} isLoading={isLoading} />
			{article && article.length > 0 && number ? (
				<Article data={article} isLoading={isLoading} />
			) : (
				<Issue data={data} isLoading={isLoading} />
			)}
		</Container>
	);
};

export default Blog;
