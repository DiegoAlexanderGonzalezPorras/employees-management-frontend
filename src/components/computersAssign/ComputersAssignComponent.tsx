import { useEffect, useState, type ReactElement } from "react";
import "./ComputersAssignComponent.scss";
import { getComputersModels, getComputersSerialNumber } from "../../services/computersInventory/ComputersInventoryService";
import type { ComputerAssignRequestModel } from "../../models/ComputerAssignRequestModel";
import { sendComputersAssignRequest } from "../../services/computersAssignRequest/ComputersAssignRequestService";
import { useNavigate } from "react-router-dom";
import { PathEnum } from "../../enums/PathEnum";

const ComputersAssignComponent = (): ReactElement => {
  const navigate = useNavigate();

  const [ models, setModels ] = useState<string[]>([]);
  const [ serialNumbers, setSerialNumbers ] = useState([]);
  const [ disabledButton, setDisabledButton ] = useState(true);
  const [ form, setForm ] = useState<ComputerAssignRequestModel>({
    name: "",
    model: "",
    idComputer: ""
  })

  useEffect(() => {
    getComputersModels()
      .then((models: string[]) => {
        setModels(models)
        setForm({
          ...form,
          model: "",
          idComputer: ""
        })
      })
  },[])

  useEffect(() => { 
    getComputersSerialNumber(form.model)
      .then((serialNumbers: string[]) => setSerialNumbers(serialNumbers))
  },[form.model])

  useEffect(() => { 
    (form.name !== "" && form.model !== ""  && form.idComputer !== "") 
      ? setDisabledButton(false) : setDisabledButton(true); 
  },[form])

  const onChangedInput = (event, state: string) => {
    setForm({ 
        ...form,
        [state]: event.target.value
    })
  }

  const onSubmitButton = () => {
    sendComputersAssignRequest(form)
      .then(() => {
        alert("Solicitud enviada correctamente")
        navigate(PathEnum.User);
      })
      .catch(() => alert("La solicitud no fue correctamente enviada"))
  }

  return (
    <>
      <p className="h3">Asignación de computadores</p>

      <div className="assign">
        <div className="assign__info">

          <div className="assign__info--item">
            <p className="h6">Nombre</p>
            <input
              className="form-control form-control-lg assign__info--input"
              type="text"
              onChange={(event) => onChangedInput(event, "name")}/>
          </div>

          <div className="assign__info--item">
            <p className="h6">Modelo</p>
            <select
              className="btn btn-secondary dropdown-toggle assign__info--input"
              onChange={(event) => onChangedInput(event, "model")}>

              <option value="" disabled selected>Modelo</option>

              {
                models.map((option: string) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))
              }
            </select>
          </div>

          <div className="assign__info--item">
            <p className="h6">Número Serial</p>
            <select
              className="btn btn-secondary dropdown-toggle assign__info--input"
              onChange={(event) => onChangedInput(event, "idComputer")}>

              <option value="" disabled selected>Número Serial</option>

              {
                serialNumbers.map((serialNumber: string) => (
                  <option value={serialNumber.id} key={serialNumber.id}>
                    {serialNumber.serialNumber}
                  </option>
                ))
              }
            </select>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          disabled={disabledButton}
          onClick={ onSubmitButton }
        >
          Asignar computador
        </button>
      </div>
    </>
  );
};

export default ComputersAssignComponent;
