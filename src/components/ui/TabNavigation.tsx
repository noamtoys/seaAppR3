import React from 'react';

interface TabNavigationProps {
  tabs: {
    id: string;
    label: string;
  }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="relative mb-8 md:mb-12 px-4">
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-4 py-2.5 md:px-8 md:py-3 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 rounded-full
              ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:text-primary-600 hover:bg-primary-50 shadow-sm hover:shadow-md border border-gray-200'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
