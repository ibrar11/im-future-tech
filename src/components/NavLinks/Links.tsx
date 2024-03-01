import React from 'react'
import Link from 'next/link'
import { NavLink } from './navLinks'
import { Button } from '..'

type NavLinksProps = {
  dropDown: boolean
  links: NavLink[]
  pathname: string
}

const Links = (props: NavLinksProps) => {
  const { dropDown = false, links = [], pathname = '' } = props
  return (
    <div
      className={
        dropDown
          ? 'bg-nav-gradient blur-10 absolute left-0 right-0 top-20 z-20 flex h-[70vh] w-full flex-col justify-between rounded-lg p-5 transition-all duration-300 ease-out sm:h-[80vh]'
          : 'h-0 w-0 overflow-hidden md:flex md:h-auto md:w-max xl:gap-x-16'
      }
    >
      <div className="text-sm md:flex md:items-center">
        <ul className="lg: flex flex-col items-start gap-y-5 md:flex-row md:items-center md:gap-x-3 md:px-1 md:py-5 lg:gap-x-6">
          {links.map((link) => (
            <li key={link.id}>
              <Button href={link.to} pathname={pathname}>
                {link.link}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      {dropDown && <Button variant="Secondary">Contact Us</Button>}
    </div>
  )
}

export default Links
