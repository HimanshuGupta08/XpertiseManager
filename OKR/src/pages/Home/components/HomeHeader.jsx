import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import React, { useState } from 'react';
import Layover from '../Layover';

const HomeHeader = () => {
  const { pathname, ...rest } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex justify-between w-full items-center'>
      <p className='text-xl uppercase w-48'>{pathname.split('/')[1]}</p>
      <div className='relative bg-white rounded-md border border-gray-200 '>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <MagnifyingGlassIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          id='search'
          name='search'
          className='outline-none bg-white p-2 ml-8 border-0 focus:border-0 focus:ring-0 focus:outline-none '
          placeholder='Search user, skill or team'
          type='search'
          aria-label='Search input'
        />
      </div>
      <button
        type='button'
        className='bg-blue-500 text-white px-6 py-2 rounded-md'
        onClick={openModal} // Open modal when button is clicked
      >
        Add Objective
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
      {isModalOpen && <Layover />}
      </Modal>
    </div>
  );
};

export default HomeHeader;