import styled from "styled-components";

export const LinkButton = styled.button`
  margin-left: auto;
  margin-bottom: 2.63em;

  border: 0px solid transparent;
  background-color: transparent;
  color: ${({theme}) => theme.color.accent};

  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: ${({theme}) => theme.color.accentActive};
  };
`;
