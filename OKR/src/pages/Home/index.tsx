import { useState } from 'react';
import CustomizedTab from '../../components/common/CustomizedTab';
import HomeHeader from './components/HomeHeader';
import QuickFilters from './components/QuickFilters';
import Okrs from './components/tabs/Okrs';
import Teams from './components/tabs/Teams';
import React from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('okr');

  const isCurrentTab = (tab: string) => activeTab === tab;

  const handleTabChange = (tab: string) => {
    if (tabs.some((t) => t.href === tab)) {
      setActiveTab(tab);
    } else {
      console.warn(`Invalid tab: ${tab}`);
    }
  };

  const tabs = [
    {
      name: 'OKRs',
      href: 'okr',
      child: <Okrs key="okr" />,
    },
    {
      name: 'Teams',
      href: 'teams',
      child: <Teams key="teams" />,
    },
  ];

  return (
    <div className='p-6 flex flex-col gap-4 w-full'>
      <HomeHeader />
      <QuickFilters />
      <CustomizedTab
        tabs={tabs}
        isCurrentTab={isCurrentTab}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default Home;
