import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  height: calc(100vh - 64px);
`;

const Loading = () => {
  return <Container>LOADING</Container>;
};

export default Loading;
