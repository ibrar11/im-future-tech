import React from 'react'
import {
  Container,
  FooterListItem,
  FooterResourceItem,
  FooterSocialLinks,
} from '..'
import { footerListData } from '../FooterListItem/footerList'
import { socialLinks } from '../FooterSocialLinks/socialLinks'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div className="md:py-15 flex flex-wrap justify-between gap-y-5 border-b-2 border-dark-400 py-10 sm:gap-x-5">
            {footerListData.map((item, index) =>
              index < 4 ? (
                <FooterListItem
                  key={item.id}
                  title={item.title}
                  subTitles={item.subTitles}
                />
              ) : (
                <FooterResourceItem
                  key={item.id}
                  title={item.title}
                  subTitles={item.subTitles}
                />
              ),
            )}
          </div>
          <div className="flex flex-col items-center gap-y-5 px-5 py-6 md:flex-row md:justify-between">
            <div className="flex gap-x-3.5 md:order-2">
              {socialLinks.map((link) => (
                <FooterSocialLinks key={link.id} icon={link.icon} />
              ))}
            </div>
            <div className="flex items-center gap-x-2.5 md:order-1">
              <p className="text-sm font-normal text-dark-900 2xl:text-lg">
                Terms & Conditions
              </p>
              <hr className="w-4.5 flex rotate-90  border border-dark-400" />
              <p className="text-sm font-normal text-dark-900 2xl:text-lg">
                Privacy Policy
              </p>
            </div>
            <p className="text-sm font-normal text-dark-900 md:order-3 2xl:text-lg">
              © 2024 FutureTech. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
