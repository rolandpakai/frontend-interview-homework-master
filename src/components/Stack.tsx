import React from 'react';

type StackProps = { className?: string; children: React.ReactNode };

const Stack: React.FC<StackProps> = ({ className, children }: StackProps) => {
  return <div className={`h-full p-4 ${className}`}>{children}</div>;
};

export default Stack;
