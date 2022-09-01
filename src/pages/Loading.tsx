import styled from 'styled-components';

import arc from '../lib/arc.svg';
import donut from '../lib/donut.svg';

const Container = styled.div`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 128px;
    position: fixed;
    animation: rotate 1s ease infinite;
    transform-origin: 50% 50%;
    opacity: 0.6;
  }
`;

const Loading = () => {
  return (
    <Container>
      <img src={'images/loading.png'} alt="Loading" />
    </Container>
  );
};

export default Loading;
