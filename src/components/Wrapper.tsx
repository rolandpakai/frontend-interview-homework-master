import React from 'react';

type WrapperProps = { children: React.ReactNode };

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="w-full h-full">{children}</div>;
};

export default Wrapper;
