import styled from "styled-components";
import MobileBack from '../../assets/img/mobile-no-hook-back.png';
import DeckBack from '../../assets/img/deck-no-hook-back.png';
import MobileHook from '../../assets/img/mobile-hook.png';

const MainPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 0.5em;

  background-image: url(${MobileBack});
  background-position: center top;
  background-repeat: no-repeat;

  @media(min-width: 1920px) {
    height: 100vh;
    background-image: url(${DeckBack});
  }

  /* for animation */
  perspective: 1000px;
  .flip-animation {
    transform: rotateY(180deg);
  }
`;

const CardFlipWrapper = styled.div`
  position: relative;
  z-index: 5;
  margin-top: 12em;
  padding: 0 0.63em;
  width: 21.5em;
  height: 31.5em;

  border-radius: 1.25em;
  box-shadow: -10px 7px 20px rgba(0, 0, 0, 0.25);
  background-color: ${({theme}) => theme.color.white};

  @media(min-width: 750px) {
    width: 25.75em;
    padding: 0 2.13em;
  }

  @media(min-width: 1920px) {
    padding: 0 5.5em;
    width: 32.25em;
    height: 38em;
  }

  /* animation */
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const CardFlipDecoration = styled.div`
  position: absolute;
  content: '';
  width: 110px;
  height: 395px;

  background-image: url(${MobileHook});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;

  /* animation */
  transform-style: preserve-3d;
  transition: transform 1s;
`;

export {
  MainPageWrapper,
  CardFlipWrapper,
  CardFlipDecoration,
};
