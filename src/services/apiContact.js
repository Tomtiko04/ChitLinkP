import apiClient from "./api"

const createContact = async () =>{
    const { data } = await apiClient.post('/merchants/contacts');

    return data
}

export {createContact}