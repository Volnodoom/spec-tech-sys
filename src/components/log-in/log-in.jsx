import { useRef, useState } from "react";
import { MASK_MOBILE, FIX_DIGITS_NUMBER, TrueLogIn, ErrorFormMessage, AppRoutes } from "../../utils/constants.js";
import { ActionButton } from "../styled-elements/action-button.js";
import { LinkButton } from "../styled-elements/link-button";
import * as S from "./log-in.style";
import { useNavigate } from "react-router-dom";

const maskMobile = (string) => {
  const numberSequence = /(^[\d]{1})(\d{3})?(\d{3})?(\d{2})?(\d{2})?/g;
  const elevenDigitsString = string.slice(0, FIX_DIGITS_NUMBER);
  const result = elevenDigitsString.replace(numberSequence, '+$1 $2 $3 $4 $5' );
  return result;
}

const unmaskMobile = (string) => {
  const numberRegexp = /\D/g;
  const onlyNumberString = string.replace(numberRegexp, '');
  return onlyNumberString;
}

const LogIn = ({triggerRestore, setupAuthorization}) => {
  const navigate = useNavigate();
  const loginElement = useRef(null);
  const passwordElement = useRef(null);
  const [isSkipMasking, setIsSkipMasking] = useState(false);

  const handleLoginClick = (evt) => {
    const value = evt.target.value;

    if(!value) {
      evt.target.value = '+7 ';
    }
  };

  const handleLoginChange = (evt) => {
    if(isSkipMasking) {
      return;
    }

    const value = evt.target.value;
    const updatedInput = maskMobile(unmaskMobile(value));
    evt.target.value = updatedInput;
  }

  const handleKeyDownPress = (evt) => {
    const isBackspaceKey = evt.keyCode === 8;
    if(isBackspaceKey) {
      setIsSkipMasking(true);
    } else {
      setIsSkipMasking(false);
    }
  }

  const handleRestoreClick = () => {
    triggerRestore(true)
  };

  const handleFormSubmit = (evt) => {

    evt.preventDefault();
    const formData = new FormData(evt.target);
    const login = unmaskMobile(formData.get('login'));
    const password = formData.get('password');


    if(login !== TrueLogIn.Login) {
      loginElement.current.setCustomValidity(ErrorFormMessage.WrongLogin);
    } else if(password !== TrueLogIn.Password) {
      passwordElement.current.setCustomValidity(ErrorFormMessage.WrongPassword);
    } else {
      loginElement.current.setCustomValidity('');
      passwordElement.current.setCustomValidity('');

      setupAuthorization(true);
      navigate(AppRoutes.Private);
    }
  }

  return(
    <>
      <S.LogInForm onSubmit={handleFormSubmit}>
        <S.LoginInput
          name="login"
          id="Login"
          type="text"
          onClick={handleLoginClick}
          onChange={handleLoginChange}
          onKeyDown={handleKeyDownPress}
          placeholder={MASK_MOBILE}
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
          ref={passwordElement}
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
