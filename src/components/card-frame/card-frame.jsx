import Logo from "../../assets/img/logo.png";
import { AnimationInfo } from "../../utils/constants";
import * as S from "./card-frame.style";

const CardFrame = ({children, cardFrameSide = AnimationInfo.Front}) => {
  return(
    <S.CardFrameWrapper $cardSide={cardFrameSide}>
      <S.CardFrameLogo
        src={Logo}
        alt="СпецТех Система. CRM-система"
      />
      {children}
    </S.CardFrameWrapper>
  );
};

export default CardFrame;
