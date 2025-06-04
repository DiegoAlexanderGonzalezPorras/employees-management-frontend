import { PathEnum } from "../enums/PathEnum";
import type { HomeItemsModel } from "../models/HomeItemsModel";

export const HOME_ITEMS: HomeItemsModel[] = [
    {
        name: "Creación de usuario",
        description: "Agrega un nuevo integrante al equipo",
        path: PathEnum.User,
        button: "Registrar usuario"
    },
    {
        name: "Solicitud de accesos",
        description: "Solicita permisos o accesos para tu equipo",
        path: PathEnum.Access,
        button: "Solicitar Acceso"
    },
    {
        name: "Asignación de computadores",
        description: "Entrega un computador al nuevo acceso",
        path: PathEnum.Computer,
        button: "Asignar Equipo"
    }
]