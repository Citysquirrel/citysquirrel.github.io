import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IBlogProps } from '../../pages/Blog';
import { Endpoints } from '@octokit/types';
import { useConsole } from '../../functions';
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

type listUserReposIssuesResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];

export interface IArticleProps {
  data: listUserReposIssuesResponse | null;
  isLoading: boolean;
}

interface ISingleUserReposIssuesResponse {}

const Container = styled.section`
  float: right;
  width: calc(100% - 200px);
`;

const Body = styled.article`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
`;

const Article = ({ data, isLoading }: IArticleProps) => {
  const { number } = useParams();
  const realData = data![0];
  // body, created_at, labels, title
  useConsole(data, 'article');
  return (
    <Container>
      <header>
        <h1>{realData.title.split('[BLOG] ')[1]}</h1>
      </header>
      <Body>
        <Markdown>{realData.body!.split('---')[1]}</Markdown>
      </Body>
    </Container>
  );
};

export default Article;
