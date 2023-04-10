import styled from "styled-components";
import { AnimationInfo } from "../../utils/constants";

const CardFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  inset: 0;
  padding: 0 0.63em;


  @media(min-width: 750px) {
    padding: 0 2.13em;
  }

  @media(min-width: 1920px) {
    padding: 0 5.5em;
  }

  /* for animation */
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(${({$cardSide}) => $cardSide === AnimationInfo.Back ? 180 : 0}deg);
`;



const CardFrameLogo = styled.img`
  width: 16.5rem;
  height: 10.75rem;
  margin: 0 auto 2.63em;

  object-fit: contain;

  @media(min-width: 1920px) {
    padding: 3.5em 0 0;
  }
`;

export {
  CardFrameWrapper,
  CardFrameLogo,
};
