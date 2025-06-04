import { useEffect, useState, type ReactElement } from "react";
import "./AccessRequestComponent.scss";
import { ACCESS_REQUEST } from "../../const/AccessRequest";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { AccessRequestModel } from "../../models/AccessRequestModel";
import { getAccessRequestByIdRequest, sendAccessRequest, updateAccessRequest } from "../../services/accessRequest/AcccessRequest";
import { PathEnum } from "../../enums/PathEnum";

const AccessRequestComponent = (): ReactElement => {
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];

  const formInit = {
    username: "",
    access: ""
  }

  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ form, setForm ] = useState<AccessRequestModel>(formInit);
   const [ isCreateUser, setIsCreateUser ] = useState<boolean>(true);
  const [ access, setAccess ] = useState({
    "JIRA": false, 
    "GITHUB": false, 
    "FIGMA": false, 
    "CONFLUENCE": false, 
    "GRAFANA": false
  })

  useEffect(() => { 
    const requestId = searchParams.get("id");

    if (requestId) {
      getAccessRequestByIdRequest(requestId)
        .then((accessRequest: AccessRequestModel) => {
          setForm(accessRequest)
          setAccess(JSON.parse(accessRequest.access))
          setIsCreateUser(false);
        })
        .catch(() => {
          setForm(formInit)
          setIsCreateUser(true)
        })
    } else {
        setForm(formInit)
        setIsCreateUser(true)
    }
  },[searchParams])

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

    if (isCreateUser) {
      sendAccessRequest(accessRequest)
        .then(() => {
          alert("Solicitud enviada correctamente")
          navigate(PathEnum.User);
        })
        .catch(() => alert("La solicitud no fue correctamente enviada"))
      } else {
        updateAccessRequest(accessRequest)
          .then(() => {
            alert("Solicitud enviada correctamente")
            navigate(PathEnum.User);
          })
          .catch(() => alert("La solicitud no fue correctamente enviada"))
      }
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
            type="text"
            value={form.username} />
        </div>

        <div className="access__info">
          <p className="h6">Solicitud de permisos</p>
          { 
            ACCESS_REQUEST.map((accessR: string) => (
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  onChange={(event) => onAccessCheck(event, accessR)}
                  type="checkbox" 
                  value={accessR}
                  checked={access[accessR]}/>
                <label className="form-check-label">
                  {accessR}
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
          {
              isCreateUser ? "Enviar Solicitud" : "Actualizar Solicitud"
          }
        </button>
      </div>
    </>
  );
};

export default AccessRequestComponent;
