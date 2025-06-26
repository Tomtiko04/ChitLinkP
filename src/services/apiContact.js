import apiClient from "./api"

const createContact = async (details) =>{
    const { data } = await apiClient.post('/merchants/contacts', details);

    return data
}

const getAllContact = async () =>{
    const { data } = await apiClient.get('/merchants/contacts');

    return data;
}

const deleteContact = async (details)=>{
    const { data } = await apiClient.post('/merchants/contact/delete', details);

    return data;
}

const createGroup = async (groupData) =>{
    const { data } = await apiClient.post('/merchants/contact-groups', groupData);

    return {data}
}

export { createContact, getAllContact, deleteContact, createGroup };