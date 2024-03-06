'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { DuoCircularBlade } from '@/icons'
import { Button, Container, HamburgerIcon, Links } from '..'
import { links } from '../NavLinks/navLinks'

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false)
  const [btnDisplay, setBtnDisplay] = useState(false)

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDropDown(false)
        setBtnDisplay(true)
      } else {
        setBtnDisplay(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="border-y-2 border-dark-400 bg-dark-300">
      <Container>
        <div className="relative flex items-center py-5 md:justify-between md:p-0">
          <div className="flex items-center gap-x-2">
            <DuoCircularBlade color="#FFD11A" />
            <h2 className="text-xl font-semibold text-white 2xl:text-2xl">
              FutureTech
            </h2>
          </div>
          <HamburgerIcon
            isNavOpened={dropDown}
            handleDropDown={handleDropDown}
          />
          <Links dropDown={dropDown} links={links} pathname={pathname} />
          {btnDisplay && <Button variant="secondary">Contact Us</Button>}
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
