import React from 'react'

type ContainerProps = { children: React.ReactNode }

const Container: React.FC<ContainerProps> = ({children}: ContainerProps) => {

  return (
    <div className="container px-5 py-12 mx-auto flex flex-wrap">
      { children }
    </div>
  )
};

export default Container;