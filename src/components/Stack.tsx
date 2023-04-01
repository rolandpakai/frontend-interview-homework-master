import React from 'react';

type StackProps = { width: string; children: React.ReactNode };

const Stack: React.FC<StackProps> = ({ width, children }: StackProps) => {
  return <div className={`h-full p-4 ${width}`}>{children}</div>;
};

export default Stack;
