import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`;

const Cube = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  animation: ${move} 10s infinite alternate;

  &:nth-child(2) {
    top: 20%;
    left: 40%;
    animation-duration: 12s;
  }

  &:nth-child(3) {
    top: 60%;
    left: 70%;
    animation-duration: 8s;
  }
`;

const AnimatedBackground: React.FC = () => {
  return (
    <Background>
      <Cube />
      <Cube />
      <Cube />
    </Background>
  );
};

export default AnimatedBackground;