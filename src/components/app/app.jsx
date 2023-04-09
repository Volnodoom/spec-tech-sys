import { Route, Routes } from "react-router-dom";
import PrivatePage from "../private-page/private-page";
import { AppRoutes } from "../../utils/constants";
import MainPage from "../main-page/main-page";

const App = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Root} element={<MainPage/>} />
      <Route path={AppRoutes.Private} element={<PrivatePage />} />
    </Routes>
  );
}

export default App;
