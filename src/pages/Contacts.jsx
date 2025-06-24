import ContactsTab from '../components/ContactsTab';
import ContactSkeleton from '../components/ContactSkeleton';
import { useGetAllContact } from '../components/features/contacts/useContacts';
import ContactItem from '../components/ContactItem';
import EmptyContacts from '../components/EmptyContacts';

const Contacts = () => {
  const { contacts, isGettingContacts } = useGetAllContact();

  return (
    <div>
      <ContactsTab />
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
    </div>
  );
};

export default Contacts;
