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
      className={`grid place-items-center text-center w-full h-full py-2 relative bg-transparent p-1 antialiased text-base font-bold leading-relaxed select-none cursor-pointer hover:text-blue-600 ${
        isActive && 'text-blue-600'
      }`}
    >
      <div className="z-20">{children}</div>
      {isActive && (
        <div className="absolute top-0 left-0 right-0 z-10 h-full bg-gray-100 rounded-tl-md rounded-tr-md border-b-2 border-blue-600" />
      )}
    </li>
  );
};

export default Tab;
