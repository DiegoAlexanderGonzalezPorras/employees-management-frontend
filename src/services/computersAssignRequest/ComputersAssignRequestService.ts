import type { ComputerAssignRequestModel } from "../../models/ComputerAssignRequestModel";

const sendComputersAssignRequest = async (computerAssignRequest: ComputerAssignRequestModel) => {
    const url = "http://localhost:8082/computer-assign-request";

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(computerAssignRequest),
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { sendComputersAssignRequest };