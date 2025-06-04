import { useEffect, useState, type ReactElement } from "react";
import "./UserCreateComponent.scss";
import { USER_FORM } from "../../const/UserForm";
import { createUserRequest, getUserRequestByIdRequest, updateUserRequest } from "../../services/userCreate/UserRequestService";
import type { UserRequestModel } from "../../models/UserRequestModel";
import { useNavigate } from "react-router-dom";
import { PathEnum } from "../../enums/PathEnum";
import type { FormModel } from "../../models/FormModel";
import { useSearchParams } from "react-router-dom";

const UserCreateComponent = (): ReactElement => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const userInit = {
    identityNumber: "",
    identityType: "",
    name: "",
    email: "",
    area: "",
    rol: ""
  };

  const [ user, setUser ] = useState<UserRequestModel>(userInit);
  const [ isCreateUser, setIsCreateUser ] = useState<boolean>(true);
  
  useEffect(() => {
    if (searchParams.get("id")) {
      getUserRequestByIdRequest(searchParams.get("id"))
        .then((userRequest: UserRequestModel) => {
          setUser(userRequest)
          setIsCreateUser(false);
        })
        .catch(() => {
          setUser(userInit)
          setIsCreateUser(true)
        })
      } else {
        setUser(userInit)
        setIsCreateUser(true)
      }
  },[searchParams])

  const onChangedInput = (event: any, state: string) => {
    setUser({ 
        ...user,
        [state]: event.target.value
    })
  }

  const onSubmitButton = () => {
    if (isCreateUser) {
      createUserRequest(user)
        .then(() => {
          alert("Solicitud enviada correctamente");
          navigate(PathEnum.Home);
        })
        .catch(() => alert("La solicitud no fue correctamente enviada"));
    } else {
      updateUserRequest(user)
        .then(() => {
          alert("Solicitud enviada correctamente");
          navigate(PathEnum.Home);
        })
        .catch(() => alert("La solicitud no fue correctamente enviada"));
    }
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
                  value={user[item.state]}>
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
                  value={user[item.state]}/>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={onSubmitButton}>
            {
              isCreateUser ? "Crear usuario" : "Actualizar Usuario"
            }
        </button>
      </div>
    </>
  );
};

export default UserCreateComponent;
