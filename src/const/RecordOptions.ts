import { PathEnum } from "../enums/PathEnum";

export const RECORD_OPTIONS: Record<string, {titles: string[], values: string[], editPath: string}> = {
    "user-request": {
        titles: [
            "Numero de identificación", 
            "Nombre", 
            "Area", 
            "Rol"
        ],
        values: [
            "identityNumber", 
            "name", 
            "area", 
            "rol"
        ],
        editPath: PathEnum.User
    },
    "computer-assign-request": { 
        titles: [
            "Nombre",
            "Modelo", 
            "Numero de serie"
        ],
        values: [
            "name", 
            "model", 
            "serialNumber"
        ],
        editPath: PathEnum.Computer
    },
    "access-request": { 
        titles: [
            "Nombre", 
            "Accesos"
        ],
        values: [
            "name", 
            "access"
        ],
        editPath: PathEnum.Access
    }
  }