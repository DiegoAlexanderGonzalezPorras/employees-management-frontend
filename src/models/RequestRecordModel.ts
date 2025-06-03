export type RequestRecordModel = UserRecordModel | ComputerAssignRecordModel | AccessRequestRecordModel;

export interface UserRecordModel {
    id: number;
    identityNumber: string;
    name: string;
    area: string;
    rol: string;
    state: string;
}

export interface ComputerAssignRecordModel {
    id: number;
    name: string;
    model: string;
    serialNumber: string;
    state: string;
}

export interface AccessRequestRecordModel {
    id: number;
    name: string;
    access: string;
    state: string;
}