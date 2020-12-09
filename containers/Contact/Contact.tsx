import React from 'react'
import { contactInfo, skillsSection } from '../../portfolio'
import ProgrammerImage from '../../components/ProgrammerImage'
import DeveloperActivity from '../../components/developerActivity'

export default function Contact() {
  return (
    <div className="subContainer" id="contact">
      <div
        className={'flex flex-col sm:flex-row sm:flex text-center sm:text-left'}
      >
        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2 order-2'}>
          <h1 className="heading ">{contactInfo.title}</h1>
          <p className={'text-gray-400 uppercase'}>{contactInfo.subtitle}</p>

          <div className={'text-gray-400'}>
            <a className="contact-detail" href={'tel:' + contactInfo.number}>
              <div>{contactInfo.number}</div>
            </a>
            <a
              className="contact-detail-email"
              href={'mailto:' + contactInfo.email_address}
            >
              <div>{contactInfo.email_address}</div>
            </a>
          </div>
        </div>
        <div
          className={
            'order-1 sm:order-2 sm:flex-1 mb-8 sm:w-1/2 w-full sm:ml-8'
          }
        >
          <ProgrammerImage />
        </div>
      </div>
    </div>
  )
}
