import { useState, type ReactElement } from "react";
import "./UserCreateComponent.scss";
import { USER_FORM } from "../../const/UserForm";
import { createUserRequest } from "../../services/userCreate/UserRequestService";
import type { UserRequestModel } from "../../models/userRequestModel";
import { useNavigate } from "react-router-dom";
import { PathEnum } from "../../enums/PathEnum";
import type { FormModel } from "../../models/FormModel";

const UserCreateComponent = (): ReactElement => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState<UserRequestModel>({
    identityNumber: "",
    identityType: "",
    name: "",
    email: "",
    area: "",
    rol: ""
  });

  const onChangedInput = (event: any, state: string) => {
    setUser({ 
        ...user,
        [state]: event.target.value
    })
  }

  const onSubmitButton = () => {
    createUserRequest(user)
      .then(() => {
        alert("Solicitud enviada correctamente");
        navigate(PathEnum.User);
      })
      .catch(() => alert("La solicitud no fue correctamente enviada"));
  };

  return (
    <>
      <p className="h3">Creación de usuarios</p>

      <div className="user">
        <p className="h5">Agrega un nuevo integrante al equipo</p>

        <div className="user__info">
          {USER_FORM.map((item: FormModel) => (
            <div className="user__info--item" key={item.input}>
              <p className="h6">{item.input}</p>
              {item.options ? (
                <select
                  className="btn btn-secondary dropdown-toggle user__info--input"
                  onChange={(event) => onChangedInput(event, item.state)}
                >
                  <option value="" disabled selected>
                    {item.input}
                  </option>

                  {item.options.map((option: string) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="form-control form-control-lg"
                  type={item.type}
                  onChange={(event) => onChangedInput(event, item.state)}
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={onSubmitButton}>
          Crear usuario
        </button>
      </div>
    </>
  );
};

export default UserCreateComponent;
