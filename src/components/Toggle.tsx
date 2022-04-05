import { Dispatch } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Frame = styled.div<{
  toggleOn: boolean;
  image: string | null;
  bg: string | null;
  bgac: string | null;
  border: string | null;
}>`
  position: relative;
  width: 52px;
  height: 28px;
  background-color: ${(props) =>
    (props.toggleOn && props.bgac) || props.bg || 'white'};
  border: 1px solid ${(props) => props.border || 'black'};
  border-radius: 100px;
  transition: all 0.5s;
  cursor: pointer;
`;

const Circle = styled.div<{
  toggleOn: boolean;
  circle: string | null;
  border: string | null;
}>`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 1px;
  left: ${(props) => (props.toggleOn ? '25px' : '1px')};
  background-color: ${(props) => props.circle || 'white'};
  border: 1px solid ${(props) => props.border || 'black'};
  border-radius: 100px;
  transition: all 0.5s;
`;

interface ColorObj {
  circle: string | null;
  background: string | null;
  backgroundActive: string | null;
  border: string | null;
}

interface Props {
  toggleOn: boolean;
  setToggleOn: Dispatch<React.SetStateAction<boolean>>;
  color: ColorObj;
  image: string | null;
}

//! props: 스위치, 색상 객체, 배경이미지

export const Toggle = ({ toggleOn, setToggleOn, color, image }: Props) => {
  const handleClick = () => {
    setToggleOn(!toggleOn);
  };
  return (
    <Container>
      <Frame
        toggleOn={toggleOn}
        bg={color.background}
        bgac={color.backgroundActive}
        border={color.border}
        image={image}
        onClick={handleClick}
      >
        <Circle
          toggleOn={toggleOn}
          border={color.border}
          circle={color.circle}
        ></Circle>
      </Frame>
    </Container>
  );
};
