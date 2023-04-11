import styled from "styled-components";

export const Input = styled.input`
  height: 2.3em;
  padding-left: 1em;

  font-family: 'Manrope', Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.88rem;
  border: 1px solid ${({theme}) => theme.color.grey};
  border-radius: 0.36em;

  :focus {
    outline: none;
  }

  :focus-visible {
    border: 1px solid ${({theme}) => theme.color.black};
    outline: none;
  }

  ::placeholder {
    color: ${({theme}) => theme.color.grey};
  }
`;
