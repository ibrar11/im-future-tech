import React from 'react'

type childrenType = {
    children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: childrenType) => {
    return <div className={`max-w-container 2xl:max-w-desktop-container mx-auto px-5`}>{children}</div>;
  }

export default Container;
