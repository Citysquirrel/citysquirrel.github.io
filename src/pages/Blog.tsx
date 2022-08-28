import { lazy, useEffect, useState } from 'react';
import {
  getIssues,
  modifyDatetime,
  useBodyColor,
  useConsole,
} from '../functions';
import { Endpoints } from '@octokit/types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Issue, SideNav } from '../components/blog';

type listUserReposIssuesResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];
export interface IBlogProps {
  data: listUserReposIssuesResponse | null;
  isLoading: boolean;
}

// 840px 기준으로 sidebar가 이동해야함
const Container = styled.main`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  clear: both;
  margin-top: 60px;
  animation: 1s 0.5s fadeIn;
  animation-fill-mode: both;
`;

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<listUserReposIssuesResponse | null>(null);

  /**
   * @constant 글 작성자를 특정합니다. string[]
   */
  const AUTHOR = ['Citysquirrel'];
  useConsole(data);
  useBodyColor('#f5f5f5');

  useEffect(() => {
    setIsLoading(true);
    getIssues()
      .then((res) => {
        setData(
          res.data.filter(
            (issue) =>
              issue.title.includes('[BLOG]') &&
              AUTHOR.includes(issue.user?.login!)
          )
        );
        setIsLoading(false);
      })
      .catch((err) => console.log('Network Error: ', err));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <SideNav data={data} isLoading={isLoading} />
      <Issue data={data} isLoading={isLoading} />
    </Container>
  );
};

export default Blog;
