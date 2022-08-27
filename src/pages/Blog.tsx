import { lazy, useEffect, useState } from 'react';
import { getIssues, modifyDatetime, useConsole } from '../functions';
import { Endpoints } from '@octokit/types';
import styled from 'styled-components';
import { Textblock } from '../components/Textblock';
import Markdown from '../components/blog/Markdown';
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
  border-bottom: 2px solid var(--gray-tint06);
  :hover {
    background-color: #eee;
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
    font-size: 28px;
    > a {
      flex: auto;
      text-align: left;
      color: var(--base-default);
      :hover {
        color: #367fdf;
        background-color: var(--base-tint06);
        transition: all 0.3s;
      }
    }
  }
  .blog-alias {
    display: inline-block;
    font-size: 14px;
    margin: 0 4px;
    color: var(--gray-tint04);
  }
  .blog-category {
    font-size: 14px;
    margin: 0 4px;
    color: var(--accent-default);
    padding: 2px 8px;
    border: 1px solid var(--accent-tint05);
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    :hover {
      color: white;
      background-color: var(--accent-default);
      transition: all 0.3s;
    }
  }
  .blog-issue-link {
    display: flex;
    vertical-align: middle;
    align-items: center;
    font-size: 12px;
    margin: 0 4px;
    padding: 2px 4px;
    border: 1px solid var(--gray-tint05);
    border-radius: 4px;
    user-select: none;
    .blog-issue-link-icon {
      margin-right: 4px;
    }
    :hover {
      background-color: var(--gray-tint05);
      transition: all 0.3s;
    }
  }
  .blog-description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: start;
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
      {data?.map((issue) => {
        const title = issue.title.split('[BLOG] ')[1];
        const { labels, body } = issue;

        const category = labels.map((label) =>
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
              {category.map((ele, idx) => (
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
      })}
    </section>
  );
};

export default Blog;
