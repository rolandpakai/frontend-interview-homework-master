import React from 'react';

type WrapperProps = { className?: string; children: React.ReactNode };

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => {
  return <div className={`w-full h-full ${className}`}>{children}</div>;
};

export default Wrapper;
