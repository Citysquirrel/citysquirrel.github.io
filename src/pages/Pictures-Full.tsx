import React, { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight, FaDownload, FaTimes } from 'react-icons/fa';

const Container = styled.div`
  @keyframes enlarge2full {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: enlarge2full;
  animation-duration: 0.5s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  z-index: 1004;
  .controll-buttons-panel {
    position: fixed;
    display: flex;
    left: 80vw;
    padding: 4px;
    background-color: inherit;
  }
  .controll-buttons {
    width: 48px;
    height: 48px;
    margin: 0 4px;
    border-radius: 100px;
    background-color: rgba(100, 100, 100, 0.4);
    cursor: pointer;
    svg {
      margin-top: 10px;
      font-size: 28px;
      color: white;
      background-color: transparent;
    }
    :hover {
      background-color: rgba(100, 100, 100, 0.7);
      transition: all 0.3s;
    }
  }
  .fullimg-container {
    display: flex;
    background-color: inherit;
  }
  .fullimg-controller {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    color: white;
    background-color: inherit;
    cursor: pointer;
    svg {
      font-size: 64px;
      margin-left: auto;
      margin-right: auto;
      background-color: inherit;
    }
  }
  .fullimg {
    flex: 1 0 968px;
    background-color: inherit;
    img {
      margin-top: 5vh;
      max-height: 90vh;
    }
  }
`;

interface Props {
  source: string;
  setFullImgOn: Dispatch<SetStateAction<boolean>>;
  handlePicNum: (key: number) => (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const FullPicture = ({ source, setFullImgOn, handlePicNum }: Props) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, []);
  return (
    <Container>
      <div className="controll-buttons-panel">
        <a
          href={source}
          download={source}
          className="controll-buttons"
          onClick={() => {
            setFullImgOn(false);
          }}
        >
          <FaDownload style={{ marginTop: '8px' }} />
        </a>
        <div
          className="controll-buttons"
          onClick={() => {
            setFullImgOn(false);
          }}
        >
          <FaTimes />
        </div>
      </div>
      <div className="fullimg-container">
        <div className="fullimg-controller" onClick={handlePicNum(-1)}>
          <FaAngleLeft />
        </div>
        <div className="fullimg">
          <img src={source} alt="mycat-full" />
        </div>
        <div className="fullimg-controller" onClick={handlePicNum(1)}>
          <FaAngleRight />
        </div>
      </div>
    </Container>
  );
};
