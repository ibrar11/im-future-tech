import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  icon?: React.ReactNode
  styles?: string
  variant?: string
  href?: string
  children?: string | React.ReactNode
}

const Button = (props: ButtonProps) => {
  const { icon, styles, variant = 'Primary', children, href } = props

  const primaryButton = href ? (
    <Link
      href={href}
      className={`flex cursor-pointer items-center justify-center rounded-xl border-2 border-solid border-dark-400 px-5 py-3.5 text-sm font-normal text-grey-300 hover:bg-dark-400 hover:text-grey-500 focus:bg-dark-500 focus:text-grey-600 active:bg-dark-300 active:text-grey-400 2xl:text-lg ${styles}`}
    >
      {children && children}
      {icon && (
        <span className="ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6">
          {icon}
        </span>
      )}
    </Link>
  ) : (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-xl border-2 border-solid border-dark-400 px-5 py-3.5 text-sm font-normal text-grey-300 hover:bg-dark-400 hover:text-grey-500 focus:bg-dark-500 focus:text-grey-600 active:bg-dark-300 active:text-grey-400 2xl:text-lg ${styles}`}
    >
      {children && children}
      {icon && (
        <span className="ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6">
          {icon}
        </span>
      )}
    </button>
  )

  const secondayButton = href ? (
    <Link
      href={href}
      className={`flex w-max cursor-pointer items-center justify-center rounded-xl bg-yellow-200 px-5 py-3.5 text-sm font-normal text-dark-200 hover:bg-yellow-400 hover:text-dark-400 focus:bg-yellow-500 focus:text-dark-500 focus:ring-2 focus:ring-grey-300 active:bg-yellow-300 active:text-dark-300 2xl:text-lg ${styles}`}
    >
      {children && children}
      {icon && (
        <span className="ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6">
          {icon}
        </span>
      )}
    </Link>
  ) : (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-xl bg-yellow-200 px-5 py-3.5 text-sm font-normal text-dark-200 hover:bg-yellow-400 hover:text-dark-400 focus:bg-yellow-500 focus:text-dark-500 focus:ring-2 focus:ring-grey-300 active:bg-yellow-300 active:text-dark-300 2xl:text-lg ${styles}`}
    >
      {children && children}
      {icon && (
        <span className="ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6">
          {icon}
        </span>
      )}
    </button>
  )

  return variant === 'Secondary' ? secondayButton : primaryButton
}

export default Button
