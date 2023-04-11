import { Route, Routes } from "react-router-dom";
import PrivatePage from "../private-page/private-page";
import { AppRoutes } from "../../utils/constants";
import MainPage from "../main-page/main-page";
import { useState } from "react";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [memoLogin, setMemoLogin] = useState(null);

  return (
    <Routes>
      <Route path={AppRoutes.Root} element={<MainPage
        setupAuthorization={setIsAuthorized}
        setMemoLogin={setMemoLogin}
        memoLogin={memoLogin}
        />}
      />

      <Route path={AppRoutes.Private} element={<PrivatePage
        setupAuthorization={setIsAuthorized}
        authorizationStatus={isAuthorized}
        setMemoLogin={setMemoLogin}
        />}
      />
    </Routes>
  );
}

export default App;
