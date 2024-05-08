import { ChartBarIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const QuickFilters = () => {
  return (
    <div className='flex p-2 bg-gray-200 justify-between items-center flex-wrap'>
      <div className='flex flex-wrap items-center gap-4'>
        <p className='text-lg pr-2 border-r border-gray-500 text-gray-500'>
          QUICK FILTERS
        </p>
        <div
          className='flex gap-2 items-center bg-white px-2 py-1 border-gray-400 rounded-md cursor-pointer'
          onClick={() => alert('Time Period clicked')}
        >
          <p className='text-gray-500'>Time Period</p>
          <p className='text-blue-500'>Q3 2023</p>
          <ChevronUpDownIcon className='w-4 h-4' />
        </div>
        <div
          className='flex gap-2 items-center bg-white  border-gray-400 px-2 py-1 rounded-md cursor-pointer'
          onClick={() => alert('Team clicked')}
        >
          <p className='text-gray-500'>Team</p>
          <p className='text-blue-500'>DevOps</p>
          <ChevronUpDownIcon className='w-4 h-4' />
        </div>
        <div
          className='flex gap-2 items-center bg-white  border-gray-400 px-2 py-1 rounded-md cursor-pointer'
          onClick={() => alert('Objective clicked')}
        >
          <p className='text-gray-500'>Objective</p>
          <p className='text-blue-500'>Community work</p>
          <ChevronUpDownIcon className='w-4 h-4' />
        </div>
      </div>
      <button
        className='flex gap-2 bg-white border-gray-400 items-center px-2 py-1  rounded-md'
        onClick={() => alert('Summary button clicked!')}
      >
        <ChartBarIcon className='w-4 h-4 text-blue-400' />
        <p>Summary</p>
      </button>
    </div>
  );
};

export default QuickFilters;
