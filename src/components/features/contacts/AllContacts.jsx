import React, { useState } from 'react';
import { useGetAllContact } from './useContacts';
import ContactSkeleton from '../../ContactSkeleton';
import ContactItem from '../../ContactItem';
import EmptyContacts from '../../EmptyContacts';


export default function AllContacts() {
    // const {isGettingContacts, contacts} = useGetAllContact();
    const [contacts, setContact] = useState([])
  return (
    <div className="bg-white">
      {false ? (
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
        <div className="flex flex-grow items-center justify-center sm:h-[80vh] h-[50vh]">
          <EmptyContacts />
        </div>
      )}
    </div>
  );
}
