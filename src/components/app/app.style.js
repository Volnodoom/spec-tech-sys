
import { createGlobalStyle } from 'styled-components';
import ManropeSemiB from '../../assets/font/manrope-semi-bold.woff';
import ManropeSemiBWoff2 from '../../assets/font/manrope-semi-bold.woff2';


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

export {
  GlobalStyle,
};
