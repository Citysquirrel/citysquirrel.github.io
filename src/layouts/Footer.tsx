import styled from 'styled-components';
import { FaGithub, FaMailBulk, FaChalkboardTeacher } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  > .footer-links {
    display: flex;
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    > img {
      margin-right: 8px;
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
    > a {
      padding: 8px;
      :hover {
        color: #ccc;
        transition: all 0.3s;
      }
    }
  }
  > .footer-names {
    font-size: small;
    color: #aaa;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <div className="footer-links">
        <img src={`${process.env.PUBLIC_URL}/ramglogo.png`} alt="ramg_logo" />

        <a href="mailto:tok1324@naver.com">
          <FaMailBulk />
        </a>
        <a
          href="https://github.com/citysquirrel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://velog.io/@tok1324" target="_blank" rel="noreferrer">
          <FaChalkboardTeacher />
        </a>
      </div>
      <div className="footer-names">곽명우 a.k.a. 도시다람쥐</div>
    </Container>
  );
};
