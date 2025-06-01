import type { ReactElement } from "react";
import "./HomeComponent.scss";
import { HOME_ITEMS } from "../../const/HomeItems";
import type { HomeItemsModel } from "../../models/HomeItemsModel";
import { useNavigate } from "react-router-dom";

const HomeComponent = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <>
      <p className="h3 homeTitle">Bienvenido a la Gestión de Recursos del Equipo</p>

      <div className="home">
        {HOME_ITEMS.map((item: HomeItemsModel) => (
          <div className="home__item" key={item.name}>
            <p className="h5 home__item--name">{item.name}</p>
            <p className="h6 home__item--description">{item.description}</p>
            <button className="btn btn-primary home__item--description" onClick={() => navigate(item.path)}>{item.button}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeComponent;
