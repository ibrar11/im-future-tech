import React from 'react'
import { Button, Container } from '..'

type SectionsHeaderProps = {
  titleTag: string
  title: string
  variant?: 'primary' | 'secondary'
  linkText?: string
  icon?: React.ReactNode
}

const SectionsHeader = (props: SectionsHeaderProps) => {
  const {
    titleTag = '',
    title = '',
    variant = 'primary',
    linkText,
    icon,
  } = props
  return (
    <div className="border-y-2 border-dark-400 bg-dark-300">
      <Container>
        <div className="flex flex-col justify-between gap-y-8 py-10 sm:flex-row sm:items-center md:py-20">
          <div className="flex flex-col gap-y-2.5 2xl:gap-y-4 2xl:py-32">
            <p className="w-max rounded bg-dark-500 px-2 py-1 text-sm font-normal text-white md:text-base 2xl:px-2.5 2xl:py-1.5 2xl:text-lg">
              {titleTag}
            </p>
            <h3 className="kumbh-font text-3xl font-medium text-white lg:text-4xl 2xl:text-6xl">
              {title}
            </h3>
          </div>
          {variant === 'primary' && (
            <Button
              icon={icon}
              href="/"
              variant={variant}
              iconStyle="p-0.5 md:size-6"
            >
              {linkText}
            </Button>
          )}
        </div>
      </Container>
    </div>
  )
}

export default SectionsHeader
