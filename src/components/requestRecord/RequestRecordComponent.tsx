import { useEffect, useState, type ReactElement } from "react";
import "./RequestRecordComponent.scss";
import { getRequestRecord } from "../../services/requestRecord/RequestRecordService";
import type { ComputerAssignRecordModel, UserRecordModel } from "../../models/RequestRecordModel";

const RequestRecordComponent = (): ReactElement => {
  const recordOptions = {
    "user-request": {
      titles: ["Numero de identificación", "Nombre", "Area", "Rol", "Estado"],
      values: ["identityNumber", "name", "area", "rol"]
    },
    "computer-assign-request":{ 
      titles: ["Nombre", "Modelo", "Numero de serie", "Estado"],
      values: ["name", "model", "serialNumber"]
    },
    "access-request":{ 
      titles: ["Nombre", "Accesos", "Estado"],
      values: ["name", "access"]
    }
  }

  const [ recordSelected, setRecordSelected ] = useState<string>("user-request");
  const [ recordTable, setRecordTable ] = useState(recordOptions["user-request"]);
  const [ record, setRecord ] = useState<UserRecordModel[] | ComputerAssignRecordModel[]>([]);

  useEffect(() => {
    setRecordTable(recordOptions[recordSelected] || recordOptions["user-request"] )
    getRequestRecord(recordSelected)
      .then((response) => {
        setRecord(response);
      })
  }, [recordSelected])

  const onRadioChanged = (option: string) => {
    setRecordSelected(option);
  }

  return (
    <>
      <p className="h3">Historial de creaciones de usuario</p>

      <div className="record__radioButton">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="requestRecord" 
            id="user"
            onChange={ () => onRadioChanged("user-request") } 
            checked={ recordSelected === "user-request" }/>
          <label className="form-check-label h6">
            Creación de Usuario
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input" 
            type="radio" 
            name="requestRecord" 
            id="access"
            onChange={ () => onRadioChanged("access-request") } 
            checked={ recordSelected === "access-request" }/>
          <label className="form-check-label h6">
            Solicitud de Accesos
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="requestRecord" 
            id="computer"
            onChange={ () => onRadioChanged("computer-assign-request") } 
            checked={ recordSelected === "computer-assign-request" }/>
          <label className="form-check-label h6">
            Asignación de Computadores
          </label>
        </div>
      </div>
      

      <table className="table table-striped">
        <thead>
          <tr>
            {
              recordTable.titles.map(( title: string ) => (
                 <th scope="col" key={title}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            record.map((record) => (
              <tr>
                {
                  recordTable.values.map((row) => (
                    <td key={row}>{record[row]}</td>
                  ))
                }
                <td className="record__state"><div className={`record__state--${record.state}`}></div>{record.state}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default RequestRecordComponent;
