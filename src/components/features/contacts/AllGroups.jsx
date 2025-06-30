import React from 'react';
import { useGetAllGroups } from './useContacts';

export default function AllGroups() {
  const { isGetAllGroups, isGettingAllGroups } = useGetAllGroups();
  return (
    <div className='pt-20 px-4 lg:px-8'>
      <h1>Group</h1>
     {isGettingAllGroups && <p>Loading...</p>}
      <div>
        {isGetAllGroups?.data.map((group) => (
          <div key={group.id}>
            <p>{group.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
