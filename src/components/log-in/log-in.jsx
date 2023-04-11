import { useEffect, useRef } from "react";
import { TrueLogIn, ErrorFormMessage, AppRoutes } from "../../utils/constants.js";
import { ActionButton } from "../styled-elements/action-button.js";
import { LinkButton } from "../styled-elements/link-button";
import * as S from "./log-in.style";
import { useNavigate } from "react-router-dom";
import { maskMobile } from "../../utils/utils.js";
import SpecificInput from "../specific-input/specific-input.jsx";

const LogIn = ({triggerRestore, setupAuthorization, autoLogin}) => {
  const navigate = useNavigate();
  const loginElement = useRef(null);

  useEffect(() => {
    if(autoLogin) {
      loginElement.current.value = autoLogin ? maskMobile(autoLogin) : maskMobile('7');
    }
  }, [autoLogin])

  const handleRestoreClick = () => {
    triggerRestore(true)
  };

  const handlePasswordChange = (evt) => {
    if(evt.target.value !== TrueLogIn.Password) {
      evt.target.setCustomValidity(ErrorFormMessage.WrongPassword);
    } else {
      evt.target.setCustomValidity('');
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    setupAuthorization(true);
    navigate(AppRoutes.Private);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return(
    <>
      <S.LogInForm onSubmit={handleFormSubmit}>
        <SpecificInput
          name="login"
          id="Login"
          type="text"
          ref={loginElement}
          required
        />
        <S.LoginLabel
          htmlFor="Login"
        >
          Введите логин
        </S.LoginLabel>

        <S.PasswordInput
          name="password"
          id="Password"
          type="text"
          onChange={handlePasswordChange}
          required
        />
        <S.PasswordLabel
          htmlFor="Password"
        >
          Введите пароль
        </S.PasswordLabel>

        <LinkButton
          type="button"
          onClick={handleRestoreClick}
        >
          Забыли пароль?
        </LinkButton>

        <ActionButton type="submit">Войти</ActionButton>
      </S.LogInForm>
    </>
  )
}

export default LogIn;
