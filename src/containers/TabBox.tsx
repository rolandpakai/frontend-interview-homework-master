import React from 'react'

type TabBoxProps = { children: React.ReactNode }

const TabBox: React.FC<TabBoxProps> = ({children}: TabBoxProps) => {

  return (
    <div className="h-72">
      <div className="pb-13">
        { children }
      </div>
    </div>
  )
};

export default TabBox;