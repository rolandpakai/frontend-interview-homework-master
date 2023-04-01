import React from 'react';

type TabsHeaderProps = { children: React.ReactNode };

const TabsHeader: React.FC<TabsHeaderProps> = ({ children }) => {
  return (
    <nav>
      <ul
        role="tablist"
        className="flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1"
      >
        {children}
      </ul>
    </nav>
  );
};

export default TabsHeader;
