import styled from 'styled-components';
import { Endpoints } from '@octokit/types';
import { modifyDatetime, useLabelAllCheckbox } from '../../functions';
import Markdown from 'markdown-to-jsx';
import styleForMarkdown from '../../lib/StyleForMarkdown';
import PreConfig from '../../lib/MarkdownConfig';
import { Middot } from '../details';

type listUserReposIssuesResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];

export interface IArticleProps {
  data: listUserReposIssuesResponse | null | undefined;
  isLoading: boolean;
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  float: right;
  width: calc(100% - 200px);
  margin-bottom: 60px;
  padding: 12px;
  animation: 1s fadeInDown ease-out;
  animation-fill-mode: both;
`;

const Subject = styled.header`
  flex: auto;
  /* border-bottom: 2px solid var(--gray-500); */
  .article-subject {
    font-size: 52px;
    font-weight: 600;
    margin: 0.75em 0 0.75em;
  }
  .article-info {
    text-align: right;
    font-size: 14px;
    padding: 24px;
    color: var(--gray-600);
  }
`;

const Body = styled.article`
  display: block;
  padding: 16px;
  margin: 8px 0 8px;
  font-size: 15px;
  border: 1px solid var(--soft-blue-200);
  border-radius: 4px;

  ${styleForMarkdown}
`;

const FloatMenu = styled.aside`
  position: absolute;
`;

const Article = ({ data, isLoading }: IArticleProps) => {
  const realData = data?.[0];
  const { kr } = modifyDatetime(realData?.created_at);
  const writer = realData?.user?.login!;

  useLabelAllCheckbox(data);

  return (
    <Container>
      <Subject>
        <p className="article-subject">
          {realData !== undefined ? realData.title.split('[BLOG] ')[1] : ''}
        </p>
        <div className="article-info">
          {writer}
          <Middot />
          {kr}
          {/* <Middot/>{commentsCount} */}
        </div>
      </Subject>
      <Body>
        <Markdown
          options={{
            overrides: {
              pre: PreConfig,
            },
          }}
        >
          {realData !== undefined
            ? realData.body!.split('---').slice(1).join('---')
            : ''}
        </Markdown>
      </Body>
    </Container>
  );
};

export default Article;
