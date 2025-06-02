import type { ReactElement } from "react";
import type { FormModel } from "../../models/FormModel.ts";
import "./FormsComponent.scss";
import { formSelector } from "../../services/store/createUser/form.select.ts";
import { useDispatch, useSelector } from "react-redux";
import { createFormActions } from "../../services/store/createUser/form.reducer.ts";
import type { AppDispatch } from "../../services/store/index.ts";

const FormsComponent = ({ formInfo }: { formInfo: FormModel[] }): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const form = useSelector(formSelector);

  const onChangedInput = (event, state: string) => {
    dispatch(createFormActions.setForm({ 
        ...form,
        [state]: event.target.value
    }))
  }

  return (
    <>
      {formInfo.map((item: FormModel) => (
        <div className="form__item" key={item.input}>
          <p className="h6">{item.input}</p>
          {item.options ? (
            <select 
              className="btn btn-secondary dropdown-toggle form__input"
              onChange={(event) => onChangedInput(event, item.state)}>

              <option value="" disabled selected>
                {item.input}
              </option>

              {
                item.options.map((option: string) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))
              }
            </select>
          ) : (
            <input
              className="form-control form-control-lg form__input"
              type={item.type}
              onChange={(event) => onChangedInput(event, item.state)}/>
          )}
        </div>
      ))}
    </>
  );
};

export default FormsComponent;
