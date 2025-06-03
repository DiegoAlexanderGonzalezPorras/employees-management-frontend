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

export { sendAccessRequest };