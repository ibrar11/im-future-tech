"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CircularBlade } from "@/icons";
import { HamburgerIcon } from ".";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false)

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setDropDown(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="flex items-center">
      <div className="flex items-center gap-x-2 py-5">
        <CircularBlade color="#FFD11A" />
        <h2 className="text-xl font-semibold text-white 2xl:text-2xl">
          FutureTech
        </h2>
      </div>
      <HamburgerIcon isNavOpened={dropDown} handleDropDown={handleDropDown} />
    </nav>
  )
}

export default NavBar
