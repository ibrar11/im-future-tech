import React from 'react'

type ButtonProps = {
  icon?: React.ReactNode
  text: string
  iconStyles?: string
  textStyles: string
  styles: string
}

const Button = (props: ButtonProps) => {
  const {
    text = '',
    icon = '',
    iconStyles = '',
    textStyles = '',
    styles = '',
  } = props
  return (
    <button
      className={`flex items-center justify-center rounded-xl px-5 py-3.5 ${styles}`}
    >
      <p className={`text-sm font-normal 2xl:text-lg ${textStyles}`}>{text}</p>
      <span
        className={`flex w-5 items-center justify-center p-[2px] 2xl:w-6 ${iconStyles}`}
      >
        {icon}
      </span>
    </button>
  )
}

export default Button
