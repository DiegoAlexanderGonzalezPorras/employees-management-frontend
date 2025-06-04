import type { UserRequestModel } from "../../models/UserRequestModel";

const createUserRequest = async (userRequest: UserRequestModel) => {
    const url = "http://localhost:8082/user-request";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userRequest)
    })

    return response.json();
}

const updateUserRequest = async (userRequest: UserRequestModel) => {
    const url = "http://localhost:8082/user-request";

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userRequest)
    })

    return response.json();
}

const getUserRequestByIdRequest = async (idRequest: string) => {
    const url = `http://localhost:8082/user-request/id?id_request=${idRequest}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { createUserRequest, getUserRequestByIdRequest, updateUserRequest };