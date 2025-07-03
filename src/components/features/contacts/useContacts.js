import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  bulkContactImport as bulkContactImportApi,
  createContact as createContactApi,
  createGroup as createGroupApi,
  deleteContact as deleteContactApi,
  getAllContact as getAllContactApi,
  getAllGroups as getAllGroupsApi,
} from '../../../services/apiContact';
import toast from 'react-hot-toast';

const useCreateContact = () => {
  const queryClient = useQueryClient();
  const {
    mutate: isCreateContact,
    isPending: isCreatingContact,
    error: isErrorCreatingContact,
  } = useMutation({
    mutationFn: createContactApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return { isCreateContact, isCreatingContact, isErrorCreatingContact };
};

const useCreateBulkContactImport = () =>{
  const { mutate: isImport, isPending: isImporting } = useMutation({
    mutationFn: bulkContactImportApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return {isImport, isImporting}
}

const useGetAllContact = (page) => {
  const { data, isPending: isGettingContacts } = useQuery({
    queryKey: ['contacts', page],
    queryFn: () => getAllContactApi(page),
  });

  return { data, isGettingContacts };
};

const useDeleteContact = () => {
  const queryClient = useQueryClient();
  const { mutate: isDeleteContact, isPending: isDeletingContact } = useMutation({
    mutationFn: deleteContactApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return { isDeleteContact, isDeletingContact };
};

const useCreateGroup = () =>{
  const queryClient = useQueryClient();
  const { mutate: isCreateGroup, isPending: isCreatingGroup } = useMutation({
    mutationFn: createGroupApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      });
      toast.success('Group created successfully.');
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'An unexpected error occurred.');
    },
  });

  return { isCreateGroup, isCreatingGroup };
}

const useGetAllGroups = () =>{
  const {data: isGetAllGroups, isPending: isGettingAllGroups} = useQuery({
    queryKey: ["groups"],
    queryFn: getAllGroupsApi
  })

  return {isGetAllGroups, isGettingAllGroups}
}

export {
  useCreateContact,
  useGetAllContact,
  useDeleteContact,
  useCreateGroup,
  useGetAllGroups,
  useCreateBulkContactImport,
};
