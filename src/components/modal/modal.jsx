import { useNavigate } from "react-router-dom";
import { AppRoutes, TrueLogIn } from "../../utils/constants";
import * as S from "./modal.style";

const Modal = ({isModalOpen, setIsModalOpen, setAutoLogin, triggerRestore}) => {
  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsModalOpen(false);
    triggerRestore(false);
    setAutoLogin(TrueLogIn.Login);
    navigate(AppRoutes.Root);
  }

  const handleCopyClick = (evt) => {
    navigator.clipboard.writeText(TrueLogIn.Password);
  }


  return(
    <S.ModalWrapper $isActive={isModalOpen}>
      <S.ModalOverlay onClick={handleModalClose} />
      <S.ModalMessageBox>
        <S.ModalMessage>Ваш временный пароль <S.ModalHighlight>123456</S.ModalHighlight></S.ModalMessage>
        <S.ModalCopyButton
          type="button"
          onClick={handleCopyClick}
        >
          Копировать пароль
        </S.ModalCopyButton>
      </S.ModalMessageBox>
    </S.ModalWrapper>
  );
};

export default Modal;
