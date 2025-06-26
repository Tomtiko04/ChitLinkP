import React from 'react';
import { useGetAllContact } from './useContacts';
import ContactSkeleton from '../../ContactSkeleton';
import ContactItem from '../../ContactItem';
import EmptyContacts from '../../EmptyContacts';


export default function AllContacts() {
    const {isGettingContacts, contacts} = useGetAllContact();
  return (
    <div className="bg-white">
      {isGettingContacts ? (
        <div>
          {Array.from({ length: 8 }).map((_, index) => (
            <ContactSkeleton key={index} />
          ))}
        </div>
      ) : contacts.data && contacts.data && contacts.data.length > 0 ? (
        <div>
          {contacts.data.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      ) : (
        <EmptyContacts />
      )}
    </div>
  );
}
