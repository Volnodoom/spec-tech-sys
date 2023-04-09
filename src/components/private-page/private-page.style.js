import styled from "styled-components";
import { ActionButton } from "../styled-elements/action-button";

const PrivateWrapper = styled.div`
  padding: 3em 1em;
  background-color: ${({theme}) => theme.color.private };
`;

const PrivateLogout = styled(ActionButton)`
  width: 40%;

  @media(min-width: 750px) {
    width: 20%;
  }
`;

export {
  PrivateWrapper,
  PrivateLogout
}
