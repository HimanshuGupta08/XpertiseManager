import React, { useState } from 'react';

function Layover({onFormSubmit,closeModal}) {
  const [formData, setFormData] = useState({
    title: '', 
    objectives: '', 
    alignTo: '', 
    owner: '', 
    dueDate: '', 
    team: '', 
    delegate: '', 
    tags: '', 
    description: '', 
    progress: '', 
    status: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmittedData(formData);
    onFormSubmit(formData);
    // Reset form data after submission (optional)
    setFormData({
      title: '',
      objectives: '',
      alignTo: '',
      owner: '',
      dueDate: '',
      team: '',
      delegate: '',
      tags: '',
      description: '',
      progress: '',
      status: ''
    });
    setIsFormVisible(false);
    closeModal();
  };

  return (
    <>
    {isFormVisible && (
    <form >
      <div className="flex flex-col p-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="justify-center items-start px-4 py-2 text-xl font-bold whitespace-nowrap rounded border border-gray-300 border-solid text-slate-300 max-md:pr-5 max-md:max-w-full">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="outline-none bg-transparent w-full"
            required
          />
        </div>
        
        <div className="flex flex-col mt-6 max-md:max-w-full">
          <div className="flex flex-col items-start py-1 pr-2 text-xs rounded bg-slate-100 max-md:pr-5 max-md:max-w-full">
            <div className="justify-center font-bold text-black uppercase whitespace-nowrap">
              Objectives
            </div>

            <div className="justify-center mt-1 text-neutral-500">
              Describe what you want to accomplish.
            </div>

            <textarea
              name="objectives"
              value={formData.objectives}
              onChange={handleInputChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded"
              rows="4"
              placeholder="Enter objectives here..."
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="alignTo" className="text-sm font-medium text-gray-600">Align To:</label>
          <input
            type="text"
            name="alignTo"
            value={formData.alignTo}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter alignTo"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="owner" className="text-sm font-medium text-gray-600">Owner:</label>
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter owner"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="dueDate" className="text-sm font-medium text-gray-600">Due Date:</label>
          <input
            type="text"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter dueDate"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="team" className="text-sm font-medium text-gray-600">Team:</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter team"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="delegate" className="text-sm font-medium text-gray-600">Delegate:</label>
          <input
            type="text"
            name="delegate"
            value={formData.delegate}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter delegate"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="tags" className="text-sm font-medium text-gray-600">Tags:</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter tags"
          />
        </div>

        <div className="flex flex-col mt-6 max-md:max-w-full">
          <label htmlFor="description" className="text-sm font-medium text-gray-600">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded"
            rows="4"
            placeholder="Enter description here..."
          ></textarea>
        </div>

        <div className="flex gap-1 pl-20 mt-6 text-sm font-semibold tracking-wide max-md:flex-wrap max-md:pl-5">
          <button type="button" className="flex flex-col justify-center whitespace-nowrap text-neutral-500 px-4 py-1 rounded border border-solid bg-slate-100 border-slate-300" onClick={closeModal}>Cancel</button>
          <button type="submit" className="flex flex-col justify-center text-white px-4 py-1 bg-blue-600 rounded" onClick={handleSubmit}>Add Objective</button>
        </div>
      </div>
    </form>
    )}

  
    </>
    
);
}

export default Layover;

//i want to display the details entered in the form on the screen?