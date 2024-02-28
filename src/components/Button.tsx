'use client'
import Link from 'next/link'
import React from 'react'
import { tw } from '@/utils/Tw'

type ButtonProps = {
  icon?: React.ReactNode
  variant?: string
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  onClick?: (...args: any[]) => unknown
  children?: string | React.ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    variant = 'Primary',
    children,
    href,
    fullWidth,
    disabled,
    onClick,
  } = props

  const btnDisabled = href?.length && disabled ? false : disabled ? true : false

  const primaryButton = btnDisabled
    ? tw`cursor-not-allowed bg-dark-500 text-grey-500 focus:ring-0`
    : tw`border-2 border-solid border-dark-400  text-grey-300 transition-all hover:bg-dark-400 hover:text-grey-500 focus:border-dark-700 focus:text-grey-600 focus:ring focus:ring-dark-700 active:bg-dark-300 active:text-grey-400`

  const secondayButton = btnDisabled
    ? tw`cursor-not-allowed bg-yellow-500 text-dark-500 focus:ring-0`
    : tw`border-2 border-solid border-dark-200 bg-yellow-200 text-dark-200 hover:bg-yellow-400 hover:text-dark-400 focus:border-yellow-500 focus:text-dark-500 focus:ring focus:ring-yellow-500 active:bg-yellow-300 active:text-dark-300`

  const btnVariant = variant === 'Secondary' ? secondayButton : primaryButton

  const buttonProps = {
    className: tw`flex cursor-pointer items-center justify-center rounded-md px-5 py-3.5 text-sm font-normal outline-none transition-all 2xl:text-lg ${btnVariant} ${fullWidth ? 'w-full' : ''}`,
    'aria-disabled': btnDisabled ? true : undefined,
    'aria-label': children,
    onClick: onClick,
  }

  const linkProps = { ...buttonProps, href }

  const buttonElement = href?.length ? Link : 'button'

  return React.createElement(
    buttonElement,
    href ? linkProps : (buttonProps as any),
    <>
      {children}
      {icon && (
        <span className="ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6">
          {icon}
        </span>
      )}
    </>,
  )
}

export default Button
