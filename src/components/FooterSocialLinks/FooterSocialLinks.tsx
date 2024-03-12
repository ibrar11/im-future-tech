import React from 'react'

type FooterSocialLinksProps = {
  icon: React.ReactNode
}

const FooterSocialLinks = (props: FooterSocialLinksProps) => {
  const { icon } = props
  return (
    <span className="flex size-5 items-center justify-center 2xl:size-6">
      {icon}
    </span>
  )
}

export default FooterSocialLinks
