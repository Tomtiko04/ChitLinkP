import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  createContact as createContactApi,
  getAllContact as getAllContactApi,
} from '../../../services/apiContact';
import toast from "react-hot-toast";

const useCreateContact = () =>{
    const queryClient = useQueryClient();
    const {mutate:isCreateContact, isPending: isCreatingContact, error: isErrorCreatingContact} = useMutation({
        mutationFn: createContactApi, 
        onSuccess: (data) =>{
            queryClient.invalidateQueries({
              queryKey: ['contacts'],
            });
            toast.success(data.message);
        },
        onError: (err)=>{
            toast.error(err.response?.data?.message || 'An unexpected error occurred.');
        }
    })

    return { isCreateContact, isCreatingContact, isErrorCreatingContact };
}

const useGetAllContact = () => {
    const {data:contacts, isPending:isGettingContacts} = useQuery({
        queryKey: ["contacts"],
        queryFn: getAllContactApi
    })

    return {contacts, isGettingContacts}
}

export { useCreateContact, useGetAllContact };