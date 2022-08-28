import styled from 'styled-components';

const Container = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  float: left;
  padding-top: 60px;
  width: 200px;
`;

const SideNav = () => {
  return <Container>Tags</Container>;
};

export default SideNav;
