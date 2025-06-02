import type { HomeItemsModel } from "../models/HomeItemsModel";

export const HOME_ITEMS: HomeItemsModel[] = [
    {
        name: "Creación de usuario",
        description: "Agrega un nuevo integrante al equipo",
        path: "/user-create",
        button: "Registrar usuario"
    },
    {
        name: "Solicitud de accesos",
        description: "Solicita permisos o accesos para tu equipo",
        path: "/access-request",
        button: "Solicitar Acceso"
    },
    {
        name: "Asignación de computadores",
        description: "Entrega un computador al nuevo acceso",
        path: "/computers-assign",
        button: "Asignar Equipo"
    }
]