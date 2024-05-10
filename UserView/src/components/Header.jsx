import { BellAlertIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import ProfileImage from '../assets/user.jpg';
const Header = () => {
  return (
    <div className='flex justify-between px-4 py-2 bg-blue-950 w-full items-center'>
      <p className='text-white text-xl'>Xpertise Manager</p>
      <div className='flex gap-6 items-center'>
        <div className='flex gap-4'>
          <BellAlertIcon
            className='w-6 h-6 text-white cursor-pointer'
            onClick={() => alert('bell icon clicked')}
          />
          <Cog6ToothIcon
            className='w-6 h-6 text-white cursor-pointer'
            onClick={() => alert('settings icon clicked')}
          />
        </div>

        <div className='flex flex-col border-l-2 pl-4 border-white items-center'>
          <p className='text-white text-lg'>User Name</p>
          <p className='text-white text-xs'>Designation</p>
        </div>
        <div className='w-12 h-12'>
          <img
            className='w-full h-full object-cover rounded-full'
            src={ProfileImage}
            alt='profile image'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
