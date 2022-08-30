import styled from 'styled-components';
import { Endpoints } from '@octokit/types';
import { useLabelAllCheckbox } from '../../functions';
import Markdown from 'markdown-to-jsx';
import styleForMarkdown from '../../lib/StyleForMarkdown';

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
  font-size: 15px;

  ${styleForMarkdown}
`;

const Article = ({ data, isLoading }: IArticleProps) => {
  const realData = data?.[0];

  useLabelAllCheckbox(data);

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
