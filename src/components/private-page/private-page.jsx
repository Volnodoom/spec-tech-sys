import { useNavigate } from "react-router-dom";
import * as S from "./private-page.style";
import { AppRoutes } from "../../utils/constants";
import { useEffect } from "react";

const PrivatePage = ({setupAuthorization, authorizationStatus, setMemoLogin}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!authorizationStatus) {
      navigate(AppRoutes.Root);
    }

  }, [authorizationStatus, navigate]);


  const handleLogoutClick = () => {
    setupAuthorization(false);
    setMemoLogin(null);
    navigate(AppRoutes.Root);
  }

  return(
    <S.PrivateWrapper>
      <h1>You successfully logged in and now on Private page</h1>
      <S.PrivateLogout type="button" onClick={handleLogoutClick}>Log out</S.PrivateLogout>
    </S.PrivateWrapper>
  )
}

export default PrivatePage;
