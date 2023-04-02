import React from 'react';

type ContainerProps = { className?: string; children: React.ReactNode };

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { className, children } = props;
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
