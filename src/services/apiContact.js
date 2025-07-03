import apiClient from "./api";

const createContact = async (contactData) => {
    const { data } = await apiClient.post('/merchants/contacts', contactData);
    return data;
};

const bulkContactImport = async (file)=>{
    const { data } = await apiClient.post('/merchants/contacts/import', file);

    return data;
}

const getAllContact = async (page = 1) => {
    const { data } = await apiClient.get(`/merchants/contacts?page=${page}`);
    return data;
};

const deleteContact = async (contactId) => {
    const { data } = await apiClient.delete('/merchants/contacts', contactId);
    return data;
};

const createGroup = async (groupData) => {
    const { data } = await apiClient.post('/merchants/groups', groupData);
    return data;
};

const getAllGroups = async () => {
    const { data } = await apiClient.get('/merchants/groups');
    return data;
};

export {
  createContact,
  getAllContact,
  deleteContact,
  createGroup,
  getAllGroups,
  bulkContactImport,
};