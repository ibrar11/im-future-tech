'use client'
import Link from 'next/link'
import React from 'react'
import { tw } from '@/utils/Tw'

type ButtonProps = {
  icon?: React.ReactNode
  iconStyle?: string
  variant?: 'primary' | 'secondary'
  pathname?: string
  href?: string
  fullWidth?: boolean
  disabled?: boolean
  onClick?: (...args: any[]) => unknown
  children?: string | React.ReactNode
  border?: boolean
  styles?: string
  active?: true | false
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    iconStyle,
    variant = 'primary',
    pathname,
    children,
    href,
    fullWidth,
    disabled,
    onClick,
    styles,
    active = false,
  } = props

  const btnDisabled = href?.length && disabled ? false : disabled ? true : false

  const primaryBtnBorder = tw`${!pathname ? `border-2 border-dark-400 bg-dark-200 ${active ? 'text-white' : 'text-grey-300'}` : pathname === href ? 'border-2 border-dark-400 bg-dark-200 text-white' : 'text-grey-300'}`

  const primaryButton = btnDisabled
    ? tw`cursor-not-allowed border-2 border-dark-500 bg-dark-500 text-grey-500 focus:ring-0`
    : tw`${primaryBtnBorder} transition-all hover:bg-dark-400 hover:text-grey-500 focus:text-grey-600 focus:ring focus:ring-dark-700 active:bg-dark-300 active:text-grey-400`

  const secondayButton = btnDisabled
    ? tw`cursor-not-allowed border-2 border-yellow-500 bg-yellow-500 text-dark-500 focus:ring-0`
    : tw`${!href || pathname === href ? 'border-2 border-yellow-200 text-dark-500' : 'text-dark-200'} bg-yellow-200 hover:bg-yellow-300 hover:text-dark-400 focus:text-dark-500 focus:ring focus:ring-yellow-500 active:bg-yellow-300 active:text-dark-300`

  const btnVariant = variant === 'secondary' ? secondayButton : primaryButton
  const iconColor = variant === 'primary' ? '#FFD11A' : '#141414'

  const buttonProps = {
    className: tw`flex items-center justify-center rounded-md px-5 py-3.5 text-sm font-normal outline-none transition-all 2xl:text-lg ${btnVariant} ${fullWidth ? 'w-full' : ''} ${styles}`,
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
        <span
          className={`ml-1 flex size-5 items-center justify-center 2xl:ml-2.5 2xl:size-6 ${iconStyle}`}
        >
          {React.cloneElement(icon as React.ReactElement, { color: iconColor })}
        </span>
      )}
    </>,
  )
}

export default Button
