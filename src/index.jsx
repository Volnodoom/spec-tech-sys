import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import * as S from './components/app/app.style';
import { defaultTheme } from './themes/default-theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
