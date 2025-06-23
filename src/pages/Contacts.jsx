import React, { useState, useEffect } from 'react';
import ContactsTab from '../components/ContactsTab';
import ContactSkeleton from '../components/ContactSkeleton';

const Contacts = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ContactsTab />
      <div className="bg-white">
        {loading ? (
          // Show skeleton loader while loading
          <div>
            {Array.from({ length: 8 }).map((_, index) => (
              <ContactSkeleton key={index} />
            ))}
          </div>
        ) : (
          // Show actual content when loaded
          <div className="p-4 text-center text-gray-500">
            Contacts will be displayed here.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
