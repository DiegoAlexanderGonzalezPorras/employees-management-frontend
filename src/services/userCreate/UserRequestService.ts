import type { UserRequestModel } from "../../models/userRequestModel";

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

export { createUserRequest };