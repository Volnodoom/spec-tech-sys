import styled from "styled-components";
import { Label } from "../styled-elements/label";
import { Input } from "../styled-elements/input";

const LogInForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
  "loginLabel"
  "loginInput"
  "passwordLabel"
  "passwordInput";

  margin-bottom: 0.75em;

  input:focus + label {
    color: ${({theme}) => theme.color.black};
  }
`;

const LoginLabel = styled(Label)`
  grid-area: loginLabel;
`;

const LoginInput = styled(Input)`
  grid-area: loginInput;
  margin-bottom: 1.43em;
`;

const PasswordLabel = styled(Label)`
  grid-area: passwordLabel;
`;

const PasswordInput = styled(Input)`
  grid-area: passwordInput;
`;


export {
  LogInForm,
  LoginLabel,
  LoginInput,
  PasswordLabel,
  PasswordInput,
}
