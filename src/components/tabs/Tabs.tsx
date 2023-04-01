import React from 'react';

type TabsProps = { children: React.ReactNode };

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <div className="block overflow-hidden">{children}</div>;
};

export default Tabs;
