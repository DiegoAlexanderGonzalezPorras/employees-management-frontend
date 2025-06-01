import type { ReactElement } from "react";
import "./UserRecordComponent.scss";
import { RECORD_TABLE } from "../../const/RecordTable";
import type { RecordTableModel } from "../../models/RecordTableModel";

const UserRecordComponent = (): ReactElement => {
  return (
    <>
      <p className="h3">Historial de creaciones de usuario</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Numero de identificación</th>
            <th scope="col">Nombre del funcionario</th>
            <th scope="col">Tipo de solicitud</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            RECORD_TABLE.map((record: RecordTableModel) => (
              <tr>
                <td>{record.identityNumber}</td>
                <td>{record.name}</td>
                <td>{record.requestType}</td>
                <td className="record__state"><div className={`record__state--${record.state}`}></div>{record.state}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default UserRecordComponent;
