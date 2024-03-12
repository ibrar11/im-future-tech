import Link from 'next/link'
import React from 'react'

type FooterSocialLinksProps = {
  icon: React.ReactNode
}

const FooterSocialLinks = (props: FooterSocialLinksProps) => {
  const { icon } = props
  return (
    <Link
      href={'/'}
      className="flex size-5 items-center justify-center 2xl:size-6"
    >
      {icon}
    </Link>
  )
}

export default FooterSocialLinks
