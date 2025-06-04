export type RequestRecordModel = UserRecordModel | ComputerAssignRecordModel | AccessRequestRecordModel;

export interface UserRecordModel {
    id: number;
    date: string;
    identityNumber: string;
    name: string;
    area: string;
    rol: string;
    state: string;
}

export interface ComputerAssignRecordModel {
    id: number;
    date: string;
    name: string;
    model: string;
    serialNumber: string;
    state: string;
}

export interface AccessRequestRecordModel {
    id: number;
    date: string;
    name: string;
    access: string;
    state: string;
}