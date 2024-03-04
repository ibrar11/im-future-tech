import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { children } = props
  return (
    <div
      className={`2xl:max-w-desktop-container mx-auto max-w-container px-4`}
    >
      {children}
    </div>
  )
}

export default Container
