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
          className={`w-full h-max relative p-4 antialiased text-base font-light leading-relaxed`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default TabPanel;
