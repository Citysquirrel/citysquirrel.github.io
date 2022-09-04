import styled from 'styled-components';

const Wrapper = styled.p`
  display: inline-block;
  font-size: 1em;
  margin: 0 4px;
  color: var(--gray-600);
`;

const Middot = () => {
  return <Wrapper className="details-middot">&middot;</Wrapper>;
};

export default Middot;
