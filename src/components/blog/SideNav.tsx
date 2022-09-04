import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { modQueryString } from '../../functions';
import { IBlogProps } from '../../pages/Blog';

const Container = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  float: left;
  font-size: 16px;
  align-items: center;
  padding-top: 60px;
  padding: 60px 12px 0 12px;
  width: 200px;
`;

const Subject = styled.header`
  position: relative;
  width: calc(100% - 64px);
  /* text-align: center; */
  font-size: 1.25em;
  font-weight: 600;
  text-align: left;
  margin-bottom: 8px;

  :before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 216px;
    height: 20px;
    background: linear-gradient(
      -105deg,
      transparent 0%,
      var(--soft-blue-50) 10%,
      var(--soft-blue-500) 75%
    );
    transform: translate3d(-40px, 8px, 0) scale(0.6);
    border-radius: 2px;
  }
`;

const List = styled.section`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    align-items: stretch;
    width: 172px;
    color: var(--gray-800);
    font-size: 0.9375em;
    &.total {
      margin-bottom: 4px;
      > .label-name {
        color: var(--soft-blue-800);
      }
    }
    > div {
      flex: auto;
      &.label-name {
        text-align: left;
      }

      &.label-count {
        text-align: right;
        color: var(--gray-500);
      }
    }
    :hover {
      > div {
        &.label-name {
          color: var(--soft-orange-900);
        }
        &.label-count {
          color: var(--gray-800);
        }
      }
    }
  }
`;

const SideNav = ({ data, isLoading }: IBlogProps) => {
  const { search } = useLocation();
  const LABELS: { [key: string]: number } = {};
  const queryObj = modQueryString(search);
  data?.forEach((issue) => {
    const { labels } = issue;
    labels
      .map((label) => typeof label === 'string' || label.name)
      .forEach((label) => {
        if (
          typeof label === 'string' &&
          label[0].toUpperCase() === label[0] &&
          !(label === 'Blog')
        )
          LABELS[label] === undefined
            ? (LABELS[label] = 1)
            : typeof label === 'string' && LABELS[label]++;
      });
  });
  const toArr = Object.entries(LABELS);
  /**
   *! 사용되지 않지만 이후 참고용으로 남겨둠
   */
  // eslint-disable-next-line
  const total = toArr.reduce(
    ([_A, count], [_B, cur]) => ['', count + cur],
    ['', 0]
  );
  return (
    <Container>
      <Subject>Tags</Subject>
      <List>
        <a className="label-link total" href="/blog">
          <div className="label-name">Total</div>
          <div className="label-count">({data?.length})</div>
        </a>
        {toArr.map(([label, count], index) => {
          return (
            <Link key={index} className="label-link" to={`/blog?tags=${label}`}>
              <div className="label-name">{label}</div>
              <div className="label-count">({count})</div>
            </Link>
          );
        })}
      </List>
    </Container>
  );
};

export default SideNav;
function useLoacation(): { search: any } {
  throw new Error('Function not implemented.');
}
