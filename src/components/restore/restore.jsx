import { ActionButton } from "../styled-elements/action-button";
import { LinkButton } from "../styled-elements/link-button";
import * as S from "./restore.style";

const Restore = ({triggerRestore}) => {

  const handleRestoreClick = () => {
    triggerRestore(false)
  }

  return(
    <>
      <S.RestoreTitle>Восстановление пароля</S.RestoreTitle>
      <S.RestoreForm action="">
        <S.RestoreInput name="restore" id="restore" type="text" required/>
        <S.RestoreLabel htmlFor="restore">Введите номер телефона </S.RestoreLabel>
      </S.RestoreForm>

      <LinkButton
        type="button"
        onClick={handleRestoreClick}
      >
        назад
      </LinkButton>

      <ActionButton type="submit">ПОЗВОНИТЬ</ActionButton>
    </>
  );
};

export default Restore;
