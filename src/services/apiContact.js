import apiClient from "./api"

const createContact = async (details) =>{
    const { data } = await apiClient.post('/merchants/contacts', details);

    return data
}

const getAllContact = async () =>{
    const { data } = await apiClient.get('/merchants/contacts');

    return data;
}

export { createContact, getAllContact };