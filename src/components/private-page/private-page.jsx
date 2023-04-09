import * as S from "./private-page.style";

const PrivatePage = () => {
  return(
    <S.PrivateWrapper>
      <h1>You successfully logged in and now on Private page</h1>
      <S.PrivateLogout type="button">Log out</S.PrivateLogout>
    </S.PrivateWrapper>
  )
}

export default PrivatePage;
