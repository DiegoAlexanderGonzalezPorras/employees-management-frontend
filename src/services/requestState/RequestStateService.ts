import type { RequestStateModel } from "../../models/RequestStateModel";

const updateRequestState = async (requestState: RequestStateModel): Promise<void> => {
    const url = 'http://localhost:8082/request/state';

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(requestState),
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { updateRequestState };