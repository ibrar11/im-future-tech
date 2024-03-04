import React from 'react'
import { TopBanner, NavBar } from '..'

const Header = () => {
  return (
    <header className="sticky top-0 z-20">
      <div className="flex flex-col">
        <TopBanner />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
