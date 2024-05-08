import {
  CalendarDaysIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  Cog6ToothIcon,
  CogIcon,
  LifebuoyIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

const upperSidebarElements = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <CogIcon className='w-6 h-6' aria-label='Dashboard icon' />,
    link: '/dashboard',
  },
  {
    id: 2,
    name: 'Users',
    icon: <UsersIcon className='w-6 h-6' aria-label='Users icon' />,
    link: '/users',
  },
  {
    id: 3,
    name: 'Project planner',
    icon: <CalendarDaysIcon className='w-6 h-6' aria-label='Project planner icon' />,
    link: '/project-planner',
  },
  {
    id: 4,
    name: 'Skills',
    icon: <CogIcon className='w-6 h-6' aria-label='Skills icon' />,
    link: '/skills',
  },
  {
    id: 5,
    name: 'OKR',
    icon: <CogIcon className='w-6 h-6' aria-label='OKR icon' />,
    link: '/okr',
  },
  {
    id: 6,
    name: 'Reports',
    icon: <ClipboardDocumentIcon className='w-6 h-6' aria-label='Reports icon' />,
    link: '/reports',
  },
  {
    id: 7,
    name: 'Time tracker',
    icon: <ClockIcon className='w-6 h-6' aria-label='Time tracker icon' />,
    link: '/time-tracker',
  },
];

const lowerSidebarElements = [
  {
    id: 1,
    name: 'Help',
    icon: <LifebuoyIcon className='w-6 h-6' aria-label='Help icon' />,
    link: '/help',
  },
  {
    id: 2,
    name: 'Support',
    icon: <Cog6ToothIcon className='w-6 h-6' aria-label='Support icon' />,
    link: '/support',
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-black w-72 p-4 h-[92vh] flex flex-col justify-between'>
      <div className='flex flex-col gap-2'>
        {upperSidebarElements.map((items) => (
          <div
            key={items?.id + 'upper-sidebar'}
            className='flex gap-4 text-white items-center hover:bg-blue-600 p-2 last:border-t last:border-white last:pt-4 cursor-pointer'
            onClick={() => navigate(items?.link)}
          >
            {items?.icon}
            <p className='text-lg font-mono'>{items?.name}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {lowerSidebarElements.map((items) => (
          <div
            key={items.id + 'lower-sidebar'}
            className='flex gap-4 text-white items-center hover:bg-blue-600 p-2 cursor-pointer'
            onClick={() => navigate(items?.link || '#')} // Added a default link for unlinked items
          >
            {items?.icon}
            <p className='text-lg font-mono'>{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;