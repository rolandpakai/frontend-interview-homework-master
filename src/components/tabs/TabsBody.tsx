import React from 'react';

type TabsBodyProps = { children: React.ReactNode };

const TabsBody: React.FC<TabsBodyProps> = ({ children }) => {
  return (
    <div className="block w-full relative bg-transparent overflow-hidden">
      {children}
    </div>
  );
};

export default TabsBody;
