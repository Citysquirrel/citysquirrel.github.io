import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Endpoints } from '@octokit/types';
import { useConsole } from '../../functions';
import { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

type listUserReposIssuesResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];

export interface IArticleProps {
  data: listUserReposIssuesResponse | null | undefined;
  isLoading: boolean;
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  float: right;
  width: calc(100% - 200px);
  margin-bottom: 60px;
`;

const Subject = styled.header`
  flex: auto;
  border-bottom: 2px solid var(--gray-500);
`;

const Body = styled.article`
  display: block;
  margin: 8px;
  padding: 8px;
  text-align: justify;
  font-size: 15px;

  a {
    color: var(--soft-blue-600);
    :hover {
      text-decoration: underline;
    }
  }

  p > code {
    background-color: var(--gray-300);
    padding: 2px 6px;
    border-radius: 4px;
  }

  pre {
    display: flex;
    width: 100%;
    > code {
      flex: auto;
      background-color: var(--soft-blue-100);
      padding: 16px;
      margin: 8px 0;
      border-radius: 4px;
    }
  }

  li::marker {
    color: var(--soft-blue-800);
  }

  li > p {
    margin: 0;
  }

  h1,
  h2 {
    border-bottom: 1px solid var(--gray-400);
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1em;
  }

  blockquote {
    margin: 0;
    border-left: 3px solid var(--gray-400);
    > p {
      margin-left: 16px;
      color: var(--gray-700);
      white-space: pre;
    }
  }
`;

const Article = ({ data, isLoading }: IArticleProps) => {
  const { number } = useParams();
  const realData = data?.[0];
  // body, created_at, labels, title
  useConsole(data, 'article');
  useConsole(
    realData !== undefined
      ? realData.body!.split('---').slice(1).join('---')
      : ''
  );
  return (
    <Container>
      <Subject>
        <h1>
          {realData !== undefined ? realData.title.split('[BLOG] ')[1] : ''}
        </h1>
      </Subject>
      <Body>
        <Markdown>
          {realData !== undefined
            ? realData.body!.split('---').slice(1).join('---')
            : ''}
        </Markdown>
      </Body>
    </Container>
  );
};

export default Article;
