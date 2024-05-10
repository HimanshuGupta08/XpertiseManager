import { XMarkIcon } from '@heroicons/react/20/solid';
import ProfileImage from '../../assets/user.jpg';
import React from 'react';

const ObjectiveComponent = ({ handleClose }) => {
  return (
    <div className='flex-grow flex flex-col gap-y-5 overflow-y-auto bg-white pb-2'>
      <div className='bg-purple-600 p-6 flex justify-between'>
        <p className='text-base font-bold text-white'>Add Objective</p>
        <button
          className='border rounded-full w-4 h-4'
          type='button'
          onClick={handleClose}
        >
          <XMarkIcon className='text-white' aria-hidden='true' />
        </button>
      </div>

      <div className='flex gap-4 flex-col p-6'>
        <input
          type='text'
          placeholder='Title'
          className='p-4 text-lg border w-full'
        />

        <div className='bg-gray-200 p-2'>
          <p className='uppercase font-semibold'>Objectives</p>
          <p>Describe what you want to accomplish</p>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Align To</p>
          </div>
          <input
            type='text'
            placeholder='Not Aligned to any OKR'
            className='p-2 text-lg border w-1/2'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Owner</p>
          </div>
          <div className='flex gap-2 justify-start items-center w-1/2'>
            <img
              className='w-6 h-6 object-cover rounded-full'
              src={ProfileImage}
              alt='profile image'
            />
            <p>Anne Rempel</p>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Due Date</p>
          </div>
          <input
            type='number'
            placeholder='Q3 2023'
            className='p-2 text-lg border w-1/2'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Team</p>
          </div>
          <input
            type='text'
            placeholder='Team'
            className='p-2 text-lg border w-1/2'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Delegate</p>
          </div>
          <input
            type='text'
            placeholder='Assign to'
            className='p-2 text-lg border w-1/2'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Tags</p>
          </div>
          <input
            type='text'
            placeholder='Add tags'
            className='p-2 text-lg border w-1/2'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>Description</p>
          </div>
          <input
            type='text'
            placeholder='Description'
            className='p-2 text-lg border w-1/2'
          />
        </div>
        <div className='bg-gray-200 p-2'>
          <p className='uppercase font-semibold'>Outcome</p>
          <p>Measured as a goal towards 100% completion.</p>
        </div>
        <button
          type='button'
          className='border border-blue-500 text-blue-500 w-fit px-6 py-2 rounded-md'
          onClick={() => alert('clicked')}
        >
          Add Milestones
        </button>
        <div className='bg-gray-200 p-2'>
          <p className='uppercase font-semibold'>Progress & Status</p>
          <p>Specify the method for updating progress and status.</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>PROGRESS</p>
          </div>
          <input
            type='number'
            placeholder='Update from key Results'
            className='p-2 text-lg border w-1/2'
          />
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 w-1/4 items-center'>
            <p className='uppercase'>STATUS</p>
          </div>
          <input
            type='text'
            placeholder='Update Based on progress'
            className='p-2 text-lg border w-1/2'
          />
        </div>
        <div className='flex gap-2 w-full justify-end items-center'>
          <button
            type='button'
            className='border border-blue-500 text-blue-500 w-fit px-6 py-2 rounded-md'
            onClick={() => alert('clicked')}
          >
            Cancel
          </button>
          <button
            type='button'
            className='bg-blue-500 text-white w-fit px-6 py-2 rounded-md'
            onClick={() => alert('clicked')}
          >
            Add Objective
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveComponent;
