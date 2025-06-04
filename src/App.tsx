import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.scss";
import SignInComponent from "./components/signIn/SignInComponent";
import HomeComponent from "./components/home/HomeComponent";
import MenuComponent from "./components/menu/MenuComponent";
import UserCreateComponent from "./components/userCreate/UserCreateComponent";
import RequestRecordComponent from "./components/requestRecord/RequestRecordComponent";
import AccessRequestComponent from "./components/accessRequest/AccessRequestComponent";
import ComputersAssignComponent from "./components/computersAssign/ComputersAssignComponent";
import { Provider } from "react-redux";
import store from "./services/store";
import { PathEnum } from "./enums/PathEnum";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Routes>
        <Route path={ PathEnum.SignIn } element={<SignInComponent />} />
        <Route element={<MenuComponent />}>

          <Route path={ PathEnum.Home } element={<HomeComponent />} />

          <Route path={ PathEnum.User } element={<UserCreateComponent />} />

          <Route path={ PathEnum.Access } element={<AccessRequestComponent />} />
          <Route path={ PathEnum.Computer } element={<ComputersAssignComponent />} />
          <Route path={ PathEnum.Record } element={<RequestRecordComponent />} />
        </Route>
        <Route path="/*" element={<Navigate to={ PathEnum.SignIn } />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
