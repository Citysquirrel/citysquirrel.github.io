//? 스크롤이 내려가도 유지되는 내비게이션 바 컴포넌트

import styled from 'styled-components';
import reactreadme from '../markdown/react/readme.md';
import { Textblock } from '../components/Textblock';

const Container = styled.div`
  position: absolute;
`;

const Button = styled.div`
  :hover {
    background-color: aliceblue;
  }
`;

const Divider = styled.div`
  height: 0px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

//! 그냥 unordered list 태그로 사용하는게 더 나을 것같기도 함

export const Navigation = () => {
  return (
    <Container>
      <ul>
        읭읭
        <li>읭</li>
        <li>읭2</li>
      </ul>
      <Divider />
      <Textblock
        content={reactreadme}
        size={16}
        color={'blue'}
        bg={'inherit'}
        align={'left'}
      />
      <Divider />
    </Container>
  );
};
