import React from 'react';

type HeaderProps = { title: string };

const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <header className="flex items-center px-4 pt-10">
      <strong className="mx-auto font-bold sm:text-2xl text-x">{title}</strong>
    </header>
  );
};

export default Header;
