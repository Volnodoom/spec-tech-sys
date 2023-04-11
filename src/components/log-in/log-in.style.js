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
  "passwordInput"
  "linkButton"
  "actionButton";

  input:focus + label {
    color: ${({theme}) => theme.color.black};
  }

  > input:first-child {
    grid-area: loginInput;
    margin-bottom: 1.43em;
  }
`;

const LoginLabel = styled(Label)`
  grid-area: loginLabel;
`;

const PasswordLabel = styled(Label)`
  grid-area: passwordLabel;
`;

const PasswordInput = styled(Input)`
  grid-area: passwordInput;
  margin-bottom: 0.75em;
`;

export {
  LogInForm,
  LoginLabel,
  PasswordLabel,
  PasswordInput,
}
