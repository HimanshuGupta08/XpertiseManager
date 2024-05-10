import { IdentificationIcon } from '@heroicons/react/20/solid';
import AddObjectiveButton from '../../../../components/common/AddObjectButton';
import UsersTable from '../../../../components/tables/Userstable';
import { useState } from 'react';

const Okrs = () => {
  const [isUsersTableVisible, setIsUsersTableVisible] = useState(true);
  return (
    <div className='flex flex-col gap-4 overflow-y-scroll w-full h-[60vh]'>
      {isUsersTableVisible ? (
        <UsersTable />
      ) : (
        <>
          <IdentificationIcon className='w-60 h-60 text-gray-500' />
          <p className='text-md'>You dont have any OKR yet in Q3 2023</p>
          <AddObjectiveButton />{' '}
        </>
      )}
    </div>
  );
};

export default Okrs;
