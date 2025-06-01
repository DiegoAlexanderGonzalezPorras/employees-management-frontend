import type { ReactElement } from "react";
import "./UserCreateComponent.scss";
import FormsComponent from "../forms/FormsComponent";
import { USER_FORM } from "../../const/UserForm";

const UserCreateComponent = (): ReactElement => {
  return (
    <>
      <p className="h3">Creación de usuarios</p>

      <div className="user">
        <p className="h5">Agrega un nuevo integrante al equipo</p>

        <div className="user__info">
          <FormsComponent formInfo={USER_FORM}/>
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={() => console.log("hola")}
        >
          Crear usuario
        </button>
      </div>
    </>
  );
};

export default UserCreateComponent;
