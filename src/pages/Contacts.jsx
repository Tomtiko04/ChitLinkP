import ContactsTab from '../components/ContactsTab';
import AllContacts from '../components/features/contacts/AllContacts';
import AllGroups from '../components/features/contacts/AllGroups';
import useTabStore from '../store/useTabStore';

const Contacts = () => {
  const { activeTab } = useTabStore();
  return (
    <div>
      <ContactsTab />
      {activeTab === 'allContacts' && <AllContacts />}
      {activeTab === 'allGroups' && <AllGroups />}
    </div>
  );
};

export default Contacts;
