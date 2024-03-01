import React from 'react'

type props = {
  isNavOpened: boolean
  handleDropDown: () => void
}

const HamburgerIcon = ({ isNavOpened, handleDropDown }: props) => {
  return (
    <div
      className="ml-auto flex h-5 w-6 cursor-pointer flex-col justify-between md:hidden"
      onClick={() => handleDropDown()}
    >
      <div
        className={`h-[3px] ${
          isNavOpened ? 'w-calc-width origin-[1px_1px] rotate-45' : ''
        } rounded-md bg-white transition-all duration-300`}
      ></div>
      <div
        className={`${
          isNavOpened ? 'h-0 w-0 opacity-0' : 'w-full'
        } h-[3px] rounded-md bg-white transition-all duration-300`}
      ></div>
      <div
        className={`h-[3px] ${
          isNavOpened
            ? 'w-calc-width origin-[1px_1px] -rotate-45'
            : 'ml-auto w-2/3'
        } rounded-md bg-white transition-all duration-300`}
      ></div>
    </div>
  )
}

export default HamburgerIcon
