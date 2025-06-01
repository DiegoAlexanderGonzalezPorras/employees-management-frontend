import type { UserFormModel } from "../models/UserFormsModel";

export const USER_FORM: UserFormModel[] = [
    {
        input: "Tipo de documento",
        type: "dropDown",
        options: ["CC", "CE"]
    },
    {
        input: "Número de documento",
        type: "number"
    },
    {
        input: "Nombre completo",
        type: "text"
    },
    {
        input: "Correo",
        type: "text"
    },
    {
        input: "Area",
        type: "text"
    },
    {
        input: "Rol",
        type: "dropDown",
        options: ["Desarrollador", "Tester", "PM", "UX"]
    }
]