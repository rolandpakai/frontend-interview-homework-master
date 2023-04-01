import React from 'react';

type BoxProps = { title: string; children: React.ReactNode };

const Box: React.FC<BoxProps> = ({ title, children }: BoxProps) => {
  return (
    <div className="flex justify-center sticky top-5 mt-4">
      <div className="relative top-5-box top-5 sticky bg-white flex flex-col w-full max-w-md rounded shadow-lg p-6 ">
        <div className="flex items-center font-semibold text-2xl mb-2 mt-2">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Box;
