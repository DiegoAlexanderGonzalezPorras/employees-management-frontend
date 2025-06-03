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

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Routes>
        <Route path="/sign-in" element={<SignInComponent />} />
        <Route element={<MenuComponent />}>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/user-create" element={<UserCreateComponent />} />
          <Route path="/access-request" element={<AccessRequestComponent />} />
          <Route path="/computers-assign" element={<ComputersAssignComponent />} />
          <Route path="/record" element={<RequestRecordComponent />} />
        </Route>
        <Route path="/*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
