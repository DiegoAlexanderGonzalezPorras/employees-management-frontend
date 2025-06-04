import { PathEnum } from "../enums/PathEnum";
import type { MenuItemsModels } from "../models/MenuItemsModel";

export const MENU_ITEMS: MenuItemsModels[] = [
    {
        name: "Inicio",
        path: PathEnum.Home,
        icon: ""
    },
    {
        name: "Historial",
        path: PathEnum.Record,
        icon: ""
    },
    {
        name: "Creación de usuario",
        path: PathEnum.User,
        icon: ""
    },
    {
        name: "Solicitud de accesos",
        path: PathEnum.Access,
        icon: ""
    },
    {
        name: "Asignación de computadores",
        path: PathEnum.Computer,
        icon: ""
    }
]