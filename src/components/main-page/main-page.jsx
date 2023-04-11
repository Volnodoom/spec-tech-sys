import { AnimationInfo } from "../../utils/constants";
import CardFrame from "../card-frame/card-frame";
import LogIn from "../log-in/log-in";

import Restore from "../restore/restore";
import * as S from "./main-page.style";
import { useEffect, useRef, useState } from "react";

const MainPage = ({setupAuthorization}) => {
  const flipCard = useRef(null);
  const decorHook = useRef(null);
  const [isRestoreActive, setIsRestoreActive] = useState(false);
  // setupAuthorization={setIsAuthorized} authorizationStatus={isAuthorized}
  useEffect(() => {
    if(!flipCard.current || !decorHook.current) {
      return;
    }

    if(isRestoreActive) {
      flipCard.current.classList.add('flip-animation');
      decorHook.current.classList.add('flip-animation');
    } else {
      flipCard.current.classList.remove('flip-animation');
      decorHook.current.classList.remove('flip-animation');
    }
  },[isRestoreActive])

  return (
    <S.MainPageWrapper>
      <S.CardFlipDecoration ref={decorHook}/>
      <S.CardFlipWrapper ref={flipCard}>
        <CardFrame>
          <LogIn triggerRestore={setIsRestoreActive} setupAuthorization={setupAuthorization}/>
        </CardFrame>
        <CardFrame cardFrameSide={AnimationInfo.Back}>
          <Restore triggerRestore={setIsRestoreActive}/>
        </CardFrame>
      </S.CardFlipWrapper>

    </S.MainPageWrapper>
  );
}

export default MainPage;
