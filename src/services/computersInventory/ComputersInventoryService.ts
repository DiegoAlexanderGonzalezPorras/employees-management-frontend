const getComputersModels = async () => {
    const url = "http://localhost:8082/computer-inventory/models";

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

const getComputersSerialNumber = async (model: string) => {
    const url = `http://localhost:8082/computer-inventory/serial-number?model=${model}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "content-type": "application/json"
        }
    })

    return response.json();
}

export { getComputersModels, getComputersSerialNumber };