import {
  CalendarDaysIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  Cog6ToothIcon,
  CogIcon,
  LifebuoyIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-sparse-arrays
const upperSidebarElements = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <CogIcon className='w-6 h-6' />,
    link: '/dashboard',
  },
  {
    id: 2,
    name: 'Users',
    icon: <UsersIcon className='w-6 h-6' />,
    link: '/users',
  },
  {
    id: 3,
    name: 'Project planner',
    icon: <CalendarDaysIcon className='w-6 h-6' />,
    link: '/project-planner',
  },
  {
    id: 4,
    name: 'Skills',
    icon: <CogIcon className='w-6 h-6' />,
    link: '/skills',
  },
  ,
  {
    id: 5,
    name: 'OKR',
    icon: <CogIcon className='w-6 h-6' />,
    link: '/okr',
  },
  {
    id: 6,
    name: 'Reports',
    icon: <ClipboardDocumentIcon className='w-6 h-6' />,
    link: '/reports',
  },
  {
    id: 7,
    name: 'Time tracker',
    icon: <ClockIcon className='w-6 h-6' />,
    link: '/time-tracker',
  },
];

const lowerSidebarElements = [
  {
    id: 1,
    name: 'Help',
    icon: <LifebuoyIcon className='w-6 h-6' />,
    link: '/help',
  },
  {
    id: 2,
    name: 'Settings',
    icon: <Cog6ToothIcon className='w-6 h-6' />,
    link: '/settings',
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className='bg-black w-72 px-4 py-2 h-[92vh] flex flex-col justify-between'>
      <div className='flex flex-col gap-2'>
        {upperSidebarElements.map((items) => (
          <div
            key={items?.id + 'upper-sidebar'}
            className={`flex gap-4 text-white items-center hover:bg-blue-600 p-2 last:border-t last:border-white last:pt-4 cursor-pointer ${path===items.link && 'bg-blue-600'}`}
            onClick={() => navigate(items?.link)}
          >
            {items?.icon}
            <p className='text-md font-mono'>{items?.name}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {lowerSidebarElements.map((items) => (
          <div
            key={items.id + 'lower-sidebar'}
            className='flex gap-4 text-white items-center hover:bg-blue-600 p-2 cursor-pointer'
            onClick={() => navigate(items?.link)}
          >
            {items?.icon}
            <p className='text-md font-mono'>{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
