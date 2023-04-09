import LogIn from "../log-in/log-in";
import Logo from "../../assets/img/logo.png";
import Restore from "../restore/restore";
import * as S from "./main-page.style";

const MainPage = () => {
  return (
    <S.MainPageWrapper>
      <S.MainPageCard>
        <S.MainPageLogo
          src={Logo}
          alt="СпецТех Система. CRM-система"
        />
        <LogIn />
        {/* <Restore /> */}

      </S.MainPageCard>

    </S.MainPageWrapper>
  );
}

export default MainPage;
