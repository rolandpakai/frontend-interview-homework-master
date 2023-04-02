import React from 'react';

type TabsHeaderProps = { children: React.ReactNode };

const TabsHeader: React.FC<TabsHeaderProps> = ({ children }) => {
  return (
    <nav>
      <ul
        role="tablist"
        className="flex relative bg-blue-gray-50 bg-opacity-60 m-1 mt-4 border-b border-gray-400"
      >
        {children}
      </ul>
    </nav>
  );
};

export default TabsHeader;
