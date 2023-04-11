import { Route, Routes } from "react-router-dom";
import PrivatePage from "../private-page/private-page";
import { AppRoutes } from "../../utils/constants";
import MainPage from "../main-page/main-page";
import { useState } from "react";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <Routes>
      <Route path={AppRoutes.Root} element={<MainPage setupAuthorization={setIsAuthorized}/>} />
      <Route path={AppRoutes.Private} element={<PrivatePage setupAuthorization={setIsAuthorized} authorizationStatus={isAuthorized}/>} />
    </Routes>
  );
}

export default App;
