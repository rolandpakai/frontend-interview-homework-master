import React from 'react';

type TabPanelProps = {
  value: string;
  activeTab: string;
  children: React.ReactNode;
};

const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
  const { value, activeTab, children } = props;
  const isActive = activeTab === value;

  return (
    <>
      {isActive && (
        <div
          role="tabpanel"
          data-value={value}
          className={`w-full h-max relative text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed fade ${
            !isActive && 'fade-out'
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default TabPanel;
