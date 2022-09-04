import styled from 'styled-components';

const Container = styled.aside`
  position: absolute;
  left: -12px;
  border: 2px solid black;
  border-radius: 4px;
`;

const FloatMenu = () => {
  return <Container>TEST!</Container>;
};

export default FloatMenu;
