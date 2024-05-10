import { ChartBarIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const QuickFilters = () => {
  return (
    <div className='flex p-2 bg-gray-200 justify-between items-center flex-wrap'>
      <div className='flex flex-wrap items-center gap-4'>
        <p className='text-lg pr-2 border-r border-gray-500 text-gray-500 font-semibold'>
          QUICK FILTERS
        </p>
        <div className='flex gap-2 items-center bg-white px-2 py-1 border-gray-400 rounded-md cursor-pointer'>
          <p className='text-gray-500'>Time Period</p>
          <select className='bg-transparent border-none ring-0 outline-none text-blue-500'>
            <option>Q3 2023</option>
            <option>Q4 2024</option>
          </select>
        </div>
        <div className='flex gap-2 items-center bg-white  border-gray-400 px-2 py-1 rounded-md cursor-pointer'>
          <p className='text-gray-500'>Team</p>
          <select className='bg-transparent border-none ring-0 outline-none text-blue-500'>
            <option>DevOps</option>
            <option>SysOps</option>
          </select>
        </div>
        <div className='flex gap-2 items-center bg-white  border-gray-400 px-2 py-1 rounded-md cursor-pointer'>
          <p className='text-gray-500'>Objective</p>
          <select className='bg-transparent border-none ring-0 outline-none text-blue-500'>
            <option>Community work</option>
            <option>Individual work</option>
          </select>
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
