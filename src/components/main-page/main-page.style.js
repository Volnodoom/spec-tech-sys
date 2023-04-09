import styled from "styled-components";
import MobileBack from '../../assets/img/mobile-back.png';
import DeckBack from '../../assets/img/deck-back.png';

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0.5em;

  background-image: url(${MobileBack});
  background-position: center top;
  background-repeat: no-repeat;

  @media(min-width: 1920px) {
    height: 100vh;
    background-image: url(${DeckBack});
  }
`;

const MainPageCard = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const MainPageLogo = styled.img`
  width: 16.5rem;
  height: 10.75rem;
  margin: 0 auto 2.63em;

  object-fit: contain;

  @media(min-width: 1920px) {
    padding: 3.5em 0 0;
  }
`;

export {
  MainPageWrapper,
  MainPageCard,
  MainPageLogo,
};
