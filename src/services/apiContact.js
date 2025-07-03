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

const getContacts = async (params) => {
  const response = await apiClient.get("/contacts", { params });
  return response.data;
};

 const importContacts = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await apiClient.post("/contacts/import", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export {
  createContact,
  getAllContact,
  deleteContact,
  createGroup,
  getAllGroups,
  bulkContactImport,
  getContacts,
  importContacts,
};