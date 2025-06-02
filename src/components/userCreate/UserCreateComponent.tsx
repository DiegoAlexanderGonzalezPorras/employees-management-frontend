import { type ReactElement } from "react";
import "./UserCreateComponent.scss";
import FormsComponent from "../forms/FormsComponent";
import { USER_FORM } from "../../const/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { formSelector } from "../../services/store/createUser/form.select";
import { createUserRequest } from "../../services/userCreate/UserRequestService";
import type { UserRequestModel } from "../../models/userRequestModel";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../services/store";
import { createFormActions } from "../../services/store/createUser/form.reducer";

const UserCreateComponent = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userCreateForm = useSelector(formSelector);

  const onSubmitButton = () => {
    createUserRequest(userCreateForm as UserRequestModel)
      .then(() => {
        dispatch(createFormActions.emptyForm())
        alert("Solicitud enviada correctamente")
        navigate("/home");
      })
      .catch(() => alert("La solicitud no fue correctamente enviada"))
  }

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
          onClick={ onSubmitButton }>
          Crear usuario
        </button>
      </div>
    </>
  );
};

export default UserCreateComponent;
