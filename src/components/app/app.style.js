
import styled, { createGlobalStyle } from 'styled-components';
import ManropeSemiB from '../../assets/font/manrope-semi-bold.woff';
import ManropeSemiBWoff2 from '../../assets/font/manrope-semi-bold.woff2';
import MobileBack from '../../assets/img/mobile-back.png';
import DeckBack from '../../assets/img/deck-back.png';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  src:  local('Manrope'),
        url(${ManropeSemiBWoff2}) format('woff2'),
        url(${ManropeSemiB}) format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;

  font-family: 'Manrope', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.22;
  color: ${({ theme }) => theme.color.black};

  background-color: ${({ theme }) => theme.color.mainBack};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input {
  border-radius: 0;
}

input::placeholder {
  opacity: 1;
}

input:invalid {
  box-shadow: none;
}

textarea {
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

/* chrome search X removal */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  appearance: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}

/* ios button \ inputs reset */
select,
textarea,
input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
  appearance: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  clip: rect(0 0 0 0);
}
`;

const AppWrapper = styled.div`
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

const AppCard = styled.div`
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

const AppLogo = styled.img`
  width: 16.5rem;
  height: 10.75rem;
  margin: 0 auto 2.63em;

  object-fit: contain;

  @media(min-width: 1920px) {
    padding: 3.5em 0 0;
  }
`;

export {
  GlobalStyle,
  AppWrapper,
  AppCard,
  AppLogo,
};
