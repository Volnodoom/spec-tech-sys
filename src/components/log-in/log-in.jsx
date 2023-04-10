import { ActionButton } from "../styled-elements/action-button.js";
import { LinkButton } from "../styled-elements/link-button";
import * as S from "./log-in.style";

const LogIn = ({triggerRestore}) => {

  const handleRestoreClick = () => {
    console.log('login Click');
    triggerRestore(true)
  }

  return(
    <>
      <S.LogInForm action="">
        <S.LoginInput name="login" id="Login" type="text" required/>
        <S.LoginLabel htmlFor="Login">Введите логин</S.LoginLabel>
        <S.PasswordInput name="password" id="Password" type="text" required/>
        <S.PasswordLabel htmlFor="Password">Введите пароль</S.PasswordLabel>
      </S.LogInForm>

      <LinkButton
        type="button"
        onClick={handleRestoreClick}
      >
        Забыли пароль?
      </LinkButton>

      <ActionButton type="submit">Войти</ActionButton>
    </>
  )
}

export default LogIn;
