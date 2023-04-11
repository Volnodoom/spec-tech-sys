import * as S from "./restore.style";
import SpecificInput from "../specific-input/specific-input";
import { LinkButton } from "../styled-elements/link-button";
import { ActionButton } from "../styled-elements/action-button";

const Restore = ({triggerRestore, setIsModalOpen}) => {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setIsModalOpen(true);
  }

  const handleRestoreClick = () => {
    triggerRestore(false)
  }

  return(
    <>
      <S.RestoreTitle>Восстановление пароля</S.RestoreTitle>
      <S.RestoreForm onSubmit={handleFormSubmit}>
        <SpecificInput
          name="restore"
          id="restore"
          type="text"
          required
        />
        <S.RestoreLabel htmlFor="restore">Введите номер телефона </S.RestoreLabel>
        <LinkButton
          type="button"
          onClick={handleRestoreClick}
        >
          назад
        </LinkButton>

        <ActionButton type="submit">Позвонить</ActionButton>
      </S.RestoreForm>

    </>
  );
};

export default Restore;
