import type { ReactElement } from "react";
import "./ComputersAssignComponent.scss";
import FormsComponent from "../forms/FormsComponent";
import { COMPUTERS_ASSIGN } from "../../const/ComputersAssignForm";

const ComputersAssignComponent = (): ReactElement => {
  return (
    <>
      <p className="h3">Asignación de computadores</p>

      <div className="assign">

        <div className="assign__info">
          <FormsComponent formInfo={COMPUTERS_ASSIGN}/>
        </div>

        <button
          type="button"
          className="btn btn-primary user__button"
          onClick={() => console.log("hola")}
        >
          Asignar computador
        </button>
      </div>
    </>
  );
};

export default ComputersAssignComponent;
