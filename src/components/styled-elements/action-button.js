import styled from "styled-components";

export const ActionButton = styled.button`
  font-family: inherit;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-align: center;

  padding: 0.4em;
  width: 100%;

  border: 0px solid transparent;
  border-radius: 0.25em;
  background-color: ${({theme}) => theme.color.accent};
  color: ${({theme}) => theme.color.white};
  cursor: pointer;
  
  :hover {
    background-color: ${({theme}) => theme.color.accentActive};
  };
`;