import React, { useState, useEffect } from 'react';
import ContactsTab from '../components/ContactsTab';
import ContactSkeleton from '../components/ContactSkeleton';
import EmptyContacts from '../components/EmptyContacts';

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate fetching an empty array
      setContacts([]); 
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ContactsTab />
      <div className="relative bg-white">
        {/* Skeleton Loader in the background */}
        <div>
          {Array.from({ length: 8 }).map((_, index) => (
            <ContactSkeleton key={index} />
          ))}
        </div>

        {/* Empty Contacts Pop-up Overlay */}
        {!loading && contacts.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
            <EmptyContacts />
          </div>
        )}

        {/* Actual Contacts List (will replace skeleton when ready) */}
        {!loading && contacts.length > 0 && (
          <div className="p-4 text-center text-gray-500">
            Contacts will be displayed here.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
