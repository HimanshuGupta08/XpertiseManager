import React, { useEffect, useState } from 'react';
// import Accordion from './Accordion';
import UsersViewModal from '../Modal/userView';

const UserViewTable = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [usersViewModal, setUsersViewModal] = useState({
    show: false,
    index: null,
    userName: '',
  });

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const getUsersData = async () => {
    await fetch(
      'https://ceq-xpertise-manager-dev.azurewebsites.net/api/v2/reports/users/0/0'
    )
      .then((response) => response.json())
      .then((data) => {
        setUsersData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching users data: ', error);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  useEffect(() => {
    console.log('usersData', usersData);
  }, [usersData]);

  return (
    <>
      {usersViewModal.show && (
        <UsersViewModal
          handleClose={() =>
            setUsersViewModal({
              show: false,
              index: null,
              userName: '',
            })
          }
          open={usersViewModal.show}
          data={usersData[usersViewModal.index]}
          userName={usersViewModal.userName}
        />
      )}
      <div className='flex flex-col p-4 bg-white shadow rounded-lg w-full overflow-y-scroll h-[90vh]'>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex space-x-2'>
            <button className='px-3 py-1 bg-zinc-200 text-zinc-800 rounded'>
              Filters
            </button>
            <select className='px-3 py-1 bg-zinc-200 text-zinc-800 rounded'>
              <option>User 20</option>
              <option>User 30</option>
              <option>User 40</option>
            </select>
            <select className='px-3 py-1 bg-zinc-200 text-zinc-800 rounded'>
              <option>Projects</option>
              <option>Tasks</option>
              <option>Hours</option>
            </select>
          </div>
          <div>
            <button className='px-3 py-1 bg-blue-500 text-white rounded'>
              Export
            </button>
          </div>
        </div>
        <div className='flex flex-col p-4 bg-white shadow rounded-lg w-full overflow-y-scroll h-[90vh]'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left text-zinc-500'>
          <thead className='text-xs text-zinc-700 uppercase bg-zinc-50'>
              <tr>
                <th scope='col' className='px-0 py-0'>
                    <input type="checkbox" />
                </th>
                <th>
                </th>
                <th scope='col' className='px-6 py-3'>
                  User
                </th>
                <th scope='col' className='px-6 py-3'>
                  Projects
                </th>
                <th scope='col' className='px-6 py-3'>
                  Tasks
                </th>
                <th scope='col' className='px-6 py-3'>
                  Hours Logged
                </th>
                <th scope='col' className='px-6 py-3'>
                  Updated Hours
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((data, index) => (
                <tr
                  key={data.EID}
                  className='bg-white border-b cursor-pointer hover:bg-zinc-200'
                  onClick={(event) =>{
                    if (event.target.type === 'checkbox') return;
                    setUsersViewModal({
                      show: true,
                      index,
                      userName: data.NAME,
                    })
                  }}
                >
                  <td className='px-0 py-0'><input type="checkbox" onClick={toggleCheckbox}/></td>
                  <td className='px-6 py-4'>{data.NAME}</td>
                  <td className='px-6 py-4'>8</td>
                  <td className='px-6 py-4'>8</td>
                  <td className='px-6 py-4'>
                    <div className='relative w-64 h-4 bg-zinc-200 rounded'>
                      <div
                        className='absolute top-0 left-0 h-4 bg-green-500 rounded'
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>30 Hrs</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-sm text-zinc-700'>
            Showing 1 to 10 of 100 entries
          </span>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button className='px-4 py-2 bg-zinc-300 text-zinc-800 rounded-l-lg'>
              Previous
            </button>
            <button className='px-4 py-2 bg-white text-zinc-800 border-zinc-300'>
              1
            </button>
            <button className='px-4 py-2 bg-white text-zinc-800 border-zinc-300'>
              2
            </button>
            <button className='px-4 py-2 bg-white text-zinc-800 border-zinc-300'>
              3
            </button>
            <button className='px-4 py-2 bg-zinc-300 text-zinc-800 rounded-r-lg'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserViewTable;
