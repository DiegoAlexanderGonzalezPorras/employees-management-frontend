import type { ReactElement } from "react";
import "./UserCreateComponent.scss";
import { USER_FORM } from "../../const/UserForm";
import type { UserFormModel } from "../../models/UserFormsModel";

const UserCreateComponent = (): ReactElement => {
  return (
    <>
      <p className="h3">Creación de usuarios</p>

      <div className="user">
        <p className="h5">Agrega un nuevo integrante al equipo</p>

        <div className="user__info">
          {
            USER_FORM.map((item: UserFormModel) => (
              <div className="user__info--item">
                <p className="h6">{item.input}</p>
                {
                  item.options ? (
                    <select className="btn btn-secondary dropdown-toggle user__info--input">
                      <option value="" disabled selected>
                        { item.input }
                      </option>
                      {
                        item.options.map((option: string) => (
                          <option value={option}>{option}</option>
                        ))
                      }
                    </select>
                  ) : (
                    <input className="form-control form-control-lg user__info--input" type={item.input} />
                  )
                }
              </div>
          ))}
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
