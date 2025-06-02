import type { FormModel } from "../models/FormModel";

export const USER_FORM: FormModel[] = [
    {
        input: "Tipo de documento",
        state: "identityType",
        type: "dropDown",
        options: ["CC", "CE"]
    },
    {
        input: "Número de documento",
        state: "identityNumber",
        type: "number"
    },
    {
        input: "Nombre completo",
        state: "name",
        type: "text"
    },
    {
        input: "Correo",
        state: "email",
        type: "text"
    },
    {
        input: "Area",
        state: "area",
        type: "text"
    },
    {
        input: "Rol",
        state: "rol",
        type: "dropDown",
        options: ["DESARROLLADOR", "TESTER", "PM", "UX"]
    }
]