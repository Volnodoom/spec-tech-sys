import LogIn from "../log-in/log-in";
import * as S from "./app.style";
import Logo from "../../assets/img/logo.png";
import Restore from "../restore/restore";

function App() {
  return (
    <S.AppWrapper>
      <S.AppCard>
        <S.AppLogo
          src={Logo}
          alt="СпецТех Система. CRM-система"
        />
        <LogIn />
        {/* <Restore /> */}

      </S.AppCard>

    </S.AppWrapper>
  );
}

export default App;
