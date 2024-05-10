import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const UsersViewModalContent = ({ handleClose, data }) => {
  console.log(data);
  return (
    <div className='flex-grow flex flex-col gap-y-5 overflow-y-auto bg-white pb-2'>
      <div className='bg-purple-600 p-6 flex justify-between'>
        <h1>{data.NAME}</h1>

        <button
          className='border rounded-full w-4 h-4'
          type='button'
          onClick={handleClose}
        >
          <XMarkIcon className='text-white' aria-hidden='true' />
        </button>
      </div>

      <div>
        {data.map.map((item, index) => (
          <div key={index + 1} className='flex flex-col gap-2 p-4'>
            <p className='text-bold'>date: {item.date}</p>
            <p className='text-bold'>On: {item.on}</p>
            <p className='text-bold'>Teams: {item.teams}</p>
          </div>
        ))}
      </div>
    </div>

//     <div className="bg-white p-4 shadow-md rounded-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-semibold">Rishab Shalla</h1>
//         <span className="text-sm">Team - Observability</span>
//       </div>
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         <div className="text-center">
//           <p className="font-semibold">Projects</p>
//           <p>8</p>
//         </div>
//         <div className="text-center">
//           <p className="font-semibold">Tasks</p>
//           <p>56</p>
//         </div>
//         <div className="text-center">
//           <p className="font-semibold">Hours Logged</p>
//           <p>156 Hrs</p>
//         </div>
//         <div className="text-center">
//           <p className="font-semibold">Hours Approved</p>
//           <p>130 Hrs</p>
//         </div>
//       </div>
//       <div className="space-y-2">
//         <div className="bg-zinc-100 p-2 rounded">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-sm font-semibold">25 Feb, 2024</h2>
//             <div className="text-xs">
//               <span className="bg-green-200 text-green-800 px-2 py-1 rounded">9 Hrs</span>
//               <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">12 Hrs</span>
//               <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded">20 Hrs</span>
//               <span className="bg-zinc-300 text-zinc-800 px-2 py-1 rounded">41 Hrs</span>
//             </div>
//           </div>
//           <div className="space-y-1">
//             <div className="flex items-center justify-between">
//               <p className="text-xs">XP-101-Documentation - Portal Features/Manual</p>
//               <div className="flex items-center">
//                 <span className="text-xs">4h 30m</span>
//                 <span className="ml-2 text-green-500">✔</span>
//                 <button className="ml-2 text-zinc-500">...</button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between">
//               <p className="text-xs">XP-101-Documentation - Manual Hours</p>
//               <div className="flex items-center">
//                 <span className="text-xs">4h 30m</span>
//                 <span className="ml-2 text-green-500">✔</span>
//                 <button className="ml-2 text-zinc-500">...</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default UsersViewModalContent;
