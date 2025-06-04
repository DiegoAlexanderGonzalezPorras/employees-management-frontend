import type { AccessRequestModel } from "../../models/AccessRequestModel";

const sendAccessRequest = async (acessRequest: AccessRequestModel) => {
    const url = "http://localhost:8082/access-request";

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(acessRequest),
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

const updateAccessRequest = async (acessRequest: AccessRequestModel) => {
    const url = "http://localhost:8082/access-request";

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(acessRequest)
    })

    return response.json();
}

const getAccessRequestByIdRequest = async (idRequest: string) => {
    const url = `http://localhost:8082/access-request/id?id_request=${idRequest}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { sendAccessRequest, getAccessRequestByIdRequest, updateAccessRequest };