import { PathEnum } from "../enums/PathEnum";

export const RECORD_OPTIONS: Record<string, {titles: string[], values: string[], editPath: string}> = {
    "user-request": {
        titles: [
            "Fecha",
            "Numero de identificación", 
            "Nombre", 
            "Area", 
            "Rol"
        ],
        values: [
            "date",
            "identityNumber", 
            "name", 
            "area", 
            "rol"
        ],
        editPath: PathEnum.User
    },
    "computer-assign-request": { 
        titles: [
            "Fecha",
            "Nombre",
            "Modelo", 
            "Numero de serie"
        ],
        values: [
            "date",
            "name", 
            "model", 
            "serialNumber"
        ],
        editPath: PathEnum.Computer
    },
    "access-request": { 
        titles: [
            "Fecha",
            "Nombre", 
            "Accesos"
        ],
        values: [
            "date",
            "name", 
            "access"
        ],
        editPath: PathEnum.Access
    }
  }