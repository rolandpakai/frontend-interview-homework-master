import React from 'react';

type TabProps = {
  value: string;
  activeTab: string;
  onClick: (value: string) => void;
  children: React.ReactNode;
};

const Tab: React.FC<TabProps> = (props: TabProps) => {
  const { value, activeTab, onClick, children } = props;
  const isActive = activeTab === value;

  return (
    <li
      role="tab"
      data-value={value}
      onClick={() => onClick(value)}
      className="grid place-items-center text-center w-full h-full relative bg-transparent p-1 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
    >
      <div className="z-20">{children}</div>
      {isActive && (
        <div className="absolute top-0 left-0 right-0 z-10 h-full bg-white rounded-md shadow" />
      )}
    </li>
  );
};

export default Tab;
