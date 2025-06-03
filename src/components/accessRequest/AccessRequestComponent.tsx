import { useEffect, useState, type ReactElement } from "react";
import "./AccessRequestComponent.scss";
import { ACCESS_REQUEST } from "../../const/AccessRequest";
import { useNavigate } from "react-router-dom";
import type { AccessRequestModel } from "../../models/AccessRequestModel";
import { sendAccessRequest } from "../../services/accessRequest/AcccessRequest";

const AccessRequestComponent = (): ReactElement => {
  const navigate = useNavigate();

  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ form, setForm ] = useState<AccessRequestModel>({
    username: "",
    access: ""
  })
  const [ access, setAccess ] = useState({
    "JIRA": false, 
    "GITHUB": false, 
    "FIGMA": false, 
    "CONFLUENCE": false, 
    "GRAFANA": false
  })

  useEffect(() => { 
    (form.username !== "" && ( access.JIRA || access.GITHUB || access.FIGMA || access.CONFLUENCE || access.GRAFANA )) 
      ? setDisabledButton(false) : setDisabledButton(true); 
  },[form, access])

  const onAccessCheck = (event, state: string) => {
    setAccess({
      ...access,
      [state]: event.target.checked
    })
  }

  const onChangedInput = (event, state: string) => {
    setForm({ 
        ...form,
        [state]: event.target.value
    })
  }

  const onSubmitButton = () => {
    const accessRequest = {
      ...form,
      access: JSON.stringify(access)
    }

    sendAccessRequest(accessRequest)
      .then(() => {
        alert("Solicitud enviada correctamente")
        navigate("/home");
      })
      .catch(() => alert("La solicitud no fue correctamente enviada"))
  }

  return (
    <>
      <p className="h3">Solicitud de accesos</p>

      <div className="access">
        <div className="access__info">
          <p className="h6">Usuario de Red</p>
          <input 
            className="form-control form-control-lg form__input" 
            onChange={(event) => onChangedInput(event, "username")}
            type="text" />
        </div>

        <div className="access__info">
          <p className="h6">Solicitud de permisos</p>
          { 
            ACCESS_REQUEST.map((access: string) => (
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  onChange={(event) => onAccessCheck(event, access)}
                  type="checkbox" 
                  value={access}/>
                <label className="form-check-label">
                  {access}
                </label>
              </div>
            ))
          }
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={ onSubmitButton }
          disabled={disabledButton}>
          Enviar solicitud
        </button>
      </div>
    </>
  );
};

export default AccessRequestComponent;
