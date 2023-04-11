import styled from "styled-components";
import { Label } from "../styled-elements/label";
import { Input } from "../styled-elements/input";
import { LogInForm } from "../log-in/log-in.style";

const RestoreTitle = styled.span`
  display: block;
  margin-bottom: 2.3em;

  font-size: 1.25rem;
  color: ${({theme}) => theme.color.grey};
  text-align: center;
`;

const RestoreForm = styled(LogInForm)`
  grid-template-areas:
  "restoreLabel"
  "restoreInput";

  > input:first-child {
    grid-area: restoreInput;
    margin-bottom: 0.63em;
  }
`;

const RestoreLabel = styled(Label)`
  grid-area: restoreLabel;
`;

const RestoreInput = styled(Input)`
  grid-area: restoreInput;
`;

export {
  RestoreForm,
  RestoreLabel,
  RestoreInput,
  RestoreTitle,
}
