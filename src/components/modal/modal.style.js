import styled, { css } from "styled-components";
import { ActionButton } from "../styled-elements/action-button";

const activeModal = css`
  visibility: visible;
  opacity: 1;
`;

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  /* width: 100%; */
  flex-direction: column;
  z-index: 1000;

  visibility: hidden;
  opacity: 0;

  @media(min-width: 360px) {
    top: 12em;
  }

  @media(min-width: 1920px) {
    top: 13.4em;
  }

  ${({$isActive}) => $isActive ? activeModal : ''}
`;

const ModalOverlay = styled.div`
  position: fixed;
  display: block;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;

  background-color: ${({theme}) => theme.color.black};
  opacity: 0.6;

  cursor: pointer;
`;

const ModalMessageBox = styled.div`
  padding: 0 0.63em;
  width: 21.5em;
  height: 15.5em;
  margin: 0 auto;
  z-index: 1100;

  position: relative;
  overflow-y: auto;

  border-radius: 1.25em;
  box-shadow: -10px 7px 20px rgba(0, 0, 0, 0.25);
  background-color: ${({theme}) => theme.color.white};


  @media(min-width: 750px) {
    width: 25.75em;
    padding: 0 2.13em;
  }

  @media(min-width: 1920px) {
    padding: 0 5.5em;
    width: 32.25em;
    height: 16em;
  }
`;

const ModalMessage = styled.p`
  margin: 20% 0 10%;
`;

const ModalHighlight = styled.span`
  padding-left: 0.5em;
  color: ${({theme}) => theme.color.accentActive};
`;

const ModalCopyButton = styled(ActionButton)`
  text-transform: none;
`;

export {
  ModalWrapper,
  ModalOverlay,
  ModalMessageBox,
  ModalMessage,
  ModalHighlight,
  ModalCopyButton
}

