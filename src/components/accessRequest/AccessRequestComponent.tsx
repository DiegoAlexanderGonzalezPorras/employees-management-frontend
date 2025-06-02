import type { ReactElement } from "react";
import "./AccessRequestComponent.scss";
import { ACCESS_REQUEST } from "../../const/AccessRequest";

const AccessRequestComponent = (): ReactElement => {
  return (
    <>
      <p className="h3">Solicitud de accesos</p>

      <div className="access">
        <div className="access__info">
          <p className="h6">Usuario de Red</p>
          <input className="form-control form-control-lg form__input" type="text" />
        </div>

        <div className="access__info">
          <p className="h6">Solicitud de permisos</p>
          { ACCESS_REQUEST.map((access: string) => (
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value={access}/>
              <label className="form-check-label">
                {access}
              </label>
          </div>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={() => console.log("hola")}
        >
          Enviar solicitud
        </button>
      </div>
    </>
  );
};

export default AccessRequestComponent;
