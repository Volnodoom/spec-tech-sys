import { AnimationInfo } from "../../utils/constants";
import CardFrame from "../card-frame/card-frame";
import LogIn from "../log-in/log-in";
import Modal from "../modal/modal";

import Restore from "../restore/restore";
import * as S from "./main-page.style";
import { useEffect, useRef, useState } from "react";

const MainPage = ({setupAuthorization, memoLogin, setMemoLogin}) => {
  const flipCard = useRef(null);
  const decorHook = useRef(null);

  const [isRestoreActive, setIsRestoreActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <>
      <S.MainPageWrapper>
        <S.CardFlipDecoration ref={decorHook}/>
        <S.CardFlipWrapper ref={flipCard}>
          <CardFrame>
            <LogIn
              triggerRestore={setIsRestoreActive}
              setupAuthorization={setupAuthorization}
              autoLogin={memoLogin}
            />
          </CardFrame>

          <CardFrame cardFrameSide={AnimationInfo.Back}>
            <Restore
              triggerRestore={setIsRestoreActive}
              setIsModalOpen={setIsModalOpen}
            />
          </CardFrame>
        </S.CardFlipWrapper>
      </S.MainPageWrapper>
      <Modal
        triggerRestore={setIsRestoreActive}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAutoLogin={setMemoLogin}
      />
    </>
  );
}

export default MainPage;
