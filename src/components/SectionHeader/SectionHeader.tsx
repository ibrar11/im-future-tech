import React from 'react'
import { Badge, Button, Container } from '..'

type SectionsHeaderProps = {
  badgeTitle: string
  title: string
  variant?: 'primary' | 'secondary'
  linkText?: string
  icon?: React.ReactNode
}

const SectionHeader = (props: SectionsHeaderProps) => {
  const {
    badgeTitle = '',
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
            <Badge badgeTitle={badgeTitle} />
            <h3 className="kumbh-font text-2.5xl font-medium text-white lg:text-4xl 2xl:text-6xl">
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

export default SectionHeader
