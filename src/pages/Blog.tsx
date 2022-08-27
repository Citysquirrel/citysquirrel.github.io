import { lazy, useEffect, useState } from 'react';
import { getIssues, modifyDatetime, useConsole } from '../functions';
import { Endpoints } from '@octokit/types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

type listUserReposIssuesResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];

const Issue = styled.article`
  display: flex;
  flex-direction: column;
  margin: 8px;
  padding: 8px;
  gap: 4px;
  border-bottom: 2px solid var(--gray-300);
  :hover {
    background-color: var(--gray-100);
    transition: all 0.3s;
  }
  .blog-info-wrapper {
    display: flex;
    vertical-align: middle;
    align-items: center;
    gap: 4px;
  }
  .blog-subject {
    display: flex;
    font-size: 1.75rem;
    > a {
      flex: auto;
      text-align: left;
      color: var(--soft-blue-600);
      :hover {
        color: var(--soft-blue-700);
        background-color: var(--soft-blue-50);
        transition: all 0.3s;
      }
    }
  }
  .blog-alias {
    display: inline-block;
    font-size: 0.875rem;
    margin: 0 4px;
    color: var(--gray-400);
  }
  .blog-category {
    font-size: 0.875rem;
    margin: 0 4px;
    color: var(--soft-orange-600);
    font-weight: 600;
    padding: 2px 8px;
    border: 1px solid var(--soft-orange-200);
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: var(--soft-orange-600);
      transition: all 0.3s;
    }
  }
  .blog-issue-link {
    display: flex;
    vertical-align: middle;
    align-items: center;
    font-size: 0.75rem;
    margin: 0 4px;
    padding: 2px 4px;
    border: 1px solid var(--gray-400);
    border-radius: 4px;
    user-select: none;
    .blog-issue-link-icon {
      margin-right: 4px;
    }
    :hover {
      background-color: var(--gray-300);
      transition: all 0.3s;
    }
  }
  .blog-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: start;
    font-size: 1rem;
    line-height: 1.5rem;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Blog = () => {
  const [data, setData] = useState<listUserReposIssuesResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * @constant 글 작성자를 특정합니다. string[]
   */
  const AUTHOR = ['Citysquirrel'];
  useConsole(data);

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
    <section>
      {isLoading ? (
        <>Loading.................................</>
      ) : (
        data?.map((issue) => {
          const title = issue.title.split('[BLOG] ')[1];
          const { labels, body } = issue;

          const tag = labels.map((label) =>
            typeof label === 'string' ? label : label.name
          );
          const description = body?.split('---')[0].trim();
          const { alias } = modifyDatetime(issue.created_at);
          return (
            //! Issue Component: 파일 분할 하지 않음
            <Issue key={issue.id}>
              <h1 className="blog-subject">
                <Link to={`/blog/${issue.number}`}>{title}</Link>
              </h1>
              <div className="blog-info-wrapper">
                <span className="blog-alias">{alias}</span>
                &middot;
                {tag.map((ele, idx) => (
                  <span key={idx} className="blog-category">
                    {ele}
                  </span>
                ))}
                &middot;
                <a
                  className="blog-issue-link"
                  href={issue.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="blog-issue-link-icon" />
                  Github Issues
                </a>
              </div>
              <div className="blog-description">{description}</div>
            </Issue>
          );
        })
      )}
    </section>
  );
};

export default Blog;
