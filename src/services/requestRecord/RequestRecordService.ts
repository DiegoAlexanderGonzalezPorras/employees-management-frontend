import type { ComputerAssignRecordModel, UserRecordModel } from "../../models/RequestRecordModel";

const getRequestRecord = async (recordSelected: string, filter: string): Promise<UserRecordModel[] | ComputerAssignRecordModel[]> => {
    const url = `http://localhost:8082/${recordSelected}?state=${filter}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { getRequestRecord };