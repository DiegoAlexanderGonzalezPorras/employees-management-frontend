import { useEffect, useState, type ReactElement } from "react";
import "./RequestRecordComponent.scss";
import { getRequestRecord } from "../../services/requestRecord/RequestRecordService";
import type { RequestRecordModel } from "../../models/RequestRecordModel";
import { useSelector } from "react-redux";
import { userSelector } from "../../services/store/user/user.select";
import approve from '../../assets/approve.svg'
import cancel from '../../assets/cancel.svg'
import edit from '../../assets/edit.svg'
import { updateRequestState } from "../../services/requestState/RequestStateService";
import { RECORD_OPTIONS } from "../../const/RecordOptions";
import { useNavigate } from "react-router-dom";

const RequestRecordComponent = (): ReactElement => {
  const userInfo = useSelector(userSelector);
  const navigate = useNavigate();

  const [ recordSelected, setRecordSelected ] = useState<string>("user-request");
  const [ recordTable, setRecordTable ] = useState(RECORD_OPTIONS["user-request"]);
  const [ record, setRecord ] = useState<RequestRecordModel[]>([]);

  useEffect(() => {
    setRecordTable(RECORD_OPTIONS[recordSelected] || RECORD_OPTIONS["user-request"] )
    getRequestRecord(recordSelected)
      .then((response) => {
        setRecord(response);
      })
  }, [recordSelected])

  const onRadioChanged = (option: string) => {
    setRecordSelected(option);
  }

  const onActionButton = (record: RequestRecordModel, action: string ) => {
    const requestState = {
      id: record.id,
      state: action
    }
    updateRequestState(requestState)
      .then(() => {
        getRequestRecord(recordSelected)
          .then((response) => {
            setRecord(response);
          })
      })
  }

  const onEditButton = (record: RequestRecordModel ) => {
    navigate(`${RECORD_OPTIONS[recordSelected].editPath}?id=${record.id}`)
  }

  return (
    <>
      <p className="h3">Historial de solicitudes</p>

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
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
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
                <td>
                  {
                    ( record.state === "PENDIENTE" && userInfo.rol === 'Admin' ) ? (
                      <div className="record__action">
                        <img onClick={() => onActionButton(record, "APROBADO")} src={approve}/>
                        <img onClick={() => onActionButton(record, "RECHAZADO")} src={cancel}/>
                      </div>
                    ) : (<></>)
                  } 
                  {
                    ( record.state === "PENDIENTE" && userInfo.rol !== 'Admin' ) ? (
                      <div className="record__action">
                        <img onClick={() => onEditButton(record)} src={edit}/>
                        <img onClick={() => onActionButton(record, "CANCELADO")} src={cancel}/>
                      </div>
                    ) : (<></>)
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default RequestRecordComponent;
