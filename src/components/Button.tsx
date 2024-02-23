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
    <div
      className={`flex items-center justify-center rounded-xl px-5 py-3.5 ${styles}`}
    >
      <p className={`text-sm font-normal 2xl:text-lg ${textStyles}`}>{text}</p>
      <span className={`w-5 2xl:w-6 flex items-center justify-center p-[2px] ${iconStyles}`}>{icon}</span>
    </div>
  )
}

export default Button
