import { type ReactElement } from "react";
import "./MenuComponent.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../const/MenuItems";
import type { MenuItemsModels } from "../../models/MenuItemsModel";
import { useSelector } from "react-redux";
import { userSelector } from "../../services/store/user/user.select";

const MenuComponent = (): ReactElement => {
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <p className="h1 header__title">Gestor De Equipos</p>
        <div className="header__user">
          <p className="h6 header__user--name">{user.username}</p>
          <p className="h6 header__user--type">{user.rol}</p>
        </div>
      </div>

      <hr className="line" />

      <div className="progress">
        <div className="progress__menu">
          {MENU_ITEMS.map((item: MenuItemsModels) => (
            <p
              className="h6"
              key={item.name}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="progress__outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
