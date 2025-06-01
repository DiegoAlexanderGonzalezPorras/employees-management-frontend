import type { ReactElement } from "react";
import type { FormModel } from '../../models/FormModel.ts'
import "./FormsComponent.scss";

const FormsComponent = ({formInfo}: {formInfo: FormModel[]}): ReactElement => (
    <>
        {
            formInfo.map((item: FormModel) => (
            <div className="form__item">
            <p className="h6">{item.input}</p>
            {
                item.options ? (
                    <select className="btn btn-secondary dropdown-toggle form__input">
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
                        <input className="form-control form-control-lg form__input" type={item.input} />
                    )
            }
            </div>
        ))}
    </>
);

export default FormsComponent;
