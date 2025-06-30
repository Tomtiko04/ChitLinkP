import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Icon } from '@iconify/react';
import useContactSelectionStore from '../../../store/contactSelectionStore';
import ContactItem from '../../ContactItem';
import EmptyContacts from '../../EmptyContacts';
import SelectionActionBar from '../../SelectionActionBar';
import { useGetAllContact } from './useContacts';

const AllContacts = () => {
  const [page, setPage] = useState(1);
  const { data, isGettingContacts: isLoading } = useGetAllContact(page);
  const { selectedContactIds, selectAll, deselectAll } = useContactSelectionStore();

  const contacts = data?.data || [];
  const pageCount = data?.last_page || 0;
  const isSelectionActive = selectedContactIds.length > 0;

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      selectAll(contacts.map(c => c.id));
    } else {
      deselectAll();
    }
  };

  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center sm:h-[80vh] h-[50vh]">
        <Icon icon="line-md:loading-twotone-loop" className="w-12 h-12 text-amber-500" />
      </div>
    );
  }

  if (!isLoading && contacts.length === 0) {
    return (
      <div className="flex h-[50vh] flex-grow items-center justify-center sm:h-[80vh]">
        <EmptyContacts />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full flex-col sm:bg-[#f5f4f0] bg-[#ffffff] p-4 text-white transition-all duration-300 sm:p-0 ${isSelectionActive ? 'pb-24' : ''}`}
    >
      {/* Mobile Card View */}
      <div className="flex-grow space-y-4 sm:hidden">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} view="card" />
        ))}
      </div>
      {/* Desktop Table View */}
      <div className="hidden flex-grow overflow-x-auto sm:block">
        <table className="min-w-full divide-y divide-[#D9D8D5]">
          <thead className="bg-[#F4F3F0]">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-[#241505]"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={contacts.length > 0 && selectedContactIds.length === contacts.length}
                    className="h-4 w-4 cursor-pointer rounded border-[#00000040]"
                  />
                  Name
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-[#241505]"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-[#241505]"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-[#241505]"
              >
                Groups
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#F4F3F0]">
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} view="table" />
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Container */}
      {pageCount > 1 && (
        <div className="my-6 flex items-center justify-between rounded-lg bg-[#f5f4f0] sm:bg-[#ffffff] px-6 py-2 sm:rounded-none">
          <div className="text-sm text-[#00000040]">
            Showing page <span className="font-medium text-[#241505]">{data.current_page}</span> of{' '}
            <span className="font-medium text-[#241505]">{data.last_page}</span>
          </div>
          <ReactPaginate
            forcePage={page - 1}
            previousLabel={<Icon icon="ion:chevron-back" className="h-5 w-5" />}
            nextLabel={<Icon icon="ion:chevron-right" className="h-5 w-5" />}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'flex items-center space-x-1'}
            pageClassName={
              'w-8 h-8 flex items-center justify-center rounded-md text-sm text-[#C7C1BA] cursor-pointer'
            }
            pageLinkClassName={'w-full h-full flex items-center justify-center'}
            previousClassName={
              'w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#cf983a]'
            }
            nextClassName={
              'w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#cf983a] cursor-pointer'
            }
            breakClassName={'w-8 h-8 flex items-center justify-center rounded-md'}
            activeClassName={'bg-[#cf983a] text-white font-bold'}
            disabledClassName={'opacity-50 cursor-not-allowed'}
          />
        </div>
      )}
      <SelectionActionBar />
    </div>
  );
};

export default AllContacts;
