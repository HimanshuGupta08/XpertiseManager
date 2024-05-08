import { IdentificationIcon } from '@heroicons/react/20/solid';
import Modal from 'react-modal';
import React, { useState } from 'react';
import Layover from '../../Layover';
import '../../../../table.css'
import '../../../../modal.css'

const Okrs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [submittedData, setSubmittedData] = useState(null);
  const handleFormSubmit = (data) => {
    setSubmittedData(data);
    console.log("ORKS",data);
  };

  return (
    <>
    {submittedData ? (
  <div className="flex flex-col p-8 w-full max-md:px-5 max-md:max-w-full">
    <h2 className="text-lg font-semibold mb-4">Submitted Data</h2>
    <table className="table-auto">
      <tbody>
        <tr>
          <td className="font-semibold">Title</td>
          <td>{submittedData.title}</td>
        </tr>
        <tr>
          <td className="font-semibold">Objectives</td>
          <td>{submittedData.objectives}</td>
        </tr>
        <tr>
          <td className="font-semibold">Align To</td>
          <td>{submittedData.alignTo}</td>
        </tr>
        <tr>
          <td className="font-semibold">Owner</td>
          <td>{submittedData.owner}</td>
        </tr>
        <tr>
          <td className="font-semibold">Due Date</td>
          <td>{submittedData.dueDate}</td>
        </tr>
        <tr>
          <td className="font-semibold">Team</td>
          <td>{submittedData.team}</td>
        </tr>
        <tr>
          <td className="font-semibold">Delegate</td>
          <td>{submittedData.delegate}</td>
        </tr>
        <tr>
          <td className="font-semibold">Tags</td>
          <td>{submittedData.tags}</td>
        </tr>
        <tr>
          <td className="font-semibold">Description</td>
          <td>{submittedData.description}</td>
        </tr>
        {/* Add more rows for other form fields as needed */}
      </tbody>
    </table>
  </div>
         ):(
          <div className='flex flex-col gap-4 w-full h-[60vh] justify-center items-center'>
            <IdentificationIcon className='w-60 h-60 text-gray-500' />
            <p className='text-md'>You don't have any OKR yet in Q3 2023</p>
            <button
              type='button'
              className='bg-blue-500 text-white px-6 py-2 rounded-md'
              onClick={openModal} // Open modal when button is clicked
            >
              Add Objective
            </button>
            {/* Modal component */}
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              className="modal"
              overlayClassName="overlay"
            >
              {isModalOpen && <Layover onFormSubmit={handleFormSubmit} closeModal={closeModal}/>}
            </Modal>
          </div>
        )}
      </>
    );
  };

  export default Okrs;
