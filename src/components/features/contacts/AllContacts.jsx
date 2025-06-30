import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Icon } from '@iconify/react';
import useContactSelectionStore from '../../../store/contactSelectionStore';
import ContactItem from '../../ContactItem';
import EmptyContacts from '../../EmptyContacts';

// Dummy contact data generator
const generateDummyContacts = (count) => {
  const contacts = [];
  for (let i = 1; i <= count; i++) {
    contacts.push({
      id: i,
      name: 'Aminat Ambali',
      email: 'AminatAmbali@gmail.com',
      phone: '+23480974567',
      occupation: 'Self Employed',
      avatar: `https://i.pravatar.cc/40?u=${i}`,
      thriftGroups: [{ id: 1, name: 'Group A' }, { id: 2, name: 'Group B' }],
    });
  }
  return contacts;
};

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { selectedContactIds, selectAll, deselectAll } = useContactSelectionStore();

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    setContacts(generateDummyContacts(25));
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = contacts.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(contacts.length / ITEMS_PER_PAGE);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      selectAll(contacts.map(c => c.id));
    } else {
      deselectAll();
    }
  };

  if (contacts.length === 0) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <EmptyContacts />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 text-white p-4 sm:p-6">
      {/* Mobile Card View - Hidden on sm and up */}
      <div className="sm:hidden flex-grow space-y-4">
        {currentItems.map((contact) => (
          <ContactItem key={contact.id} contact={contact} view="card" />
        ))}
      </div>

      {/* Desktop Table View - Hidden below sm */}
      <div className="hidden sm:block flex-grow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                <div className="flex items-center gap-4">
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll}
                    checked={selectedContactIds.length === contacts.length && contacts.length > 0}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-900 text-amber-600 focus:ring-amber-500"
                  />
                  Name
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Phone Number</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Occupation</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Thrift Groups</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {currentItems.map((contact) => (
              <ContactItem key={contact.id} contact={contact} view="table" />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Container */}
      <div className="flex items-center justify-between pt-4">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">{offset + 1}</span> to <span className="font-medium text-white">{Math.min(offset + ITEMS_PER_PAGE, contacts.length)}</span> of <span className="font-medium text-white">{contacts.length}</span> results
        </div>
        <ReactPaginate
          previousLabel={<Icon icon="heroicons-outline:chevron-left" className="h-5 w-5" />}
          nextLabel={<Icon icon="heroicons-outline:chevron-right" className="h-5 w-5" />}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'flex items-center space-x-1'}
          pageClassName={'w-8 h-8 flex items-center justify-center rounded-md text-sm'}
          pageLinkClassName={'w-full h-full flex items-center justify-center'}
          previousClassName={'w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700'}
          nextClassName={'w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-700'}
          breakClassName={'w-8 h-8 flex items-center justify-center rounded-md'}
          activeClassName={'bg-amber-600 text-white font-bold'}
          disabledClassName={'opacity-50 cursor-not-allowed'}
        />
      </div>
    </div>
  );
};

export default AllContacts;
