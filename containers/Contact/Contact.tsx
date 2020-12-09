import React from 'react'
import { contactInfo } from '../../portfolio'
import ProgrammerImage from '../../components/ProgrammerImage'
import { Transition } from 'react-transition-group'

const contactMe = () => {
  return (
    <div className="subContainer" id="contact">
      <div
        className={'flex flex-col sm:flex-row sm:flex text-center sm:text-left'}
      >
        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2 order-2'}>
          <div className="heading dark:text-primary-500">
            {contactInfo.title}
          </div>
          <p className={'text-gray-400 uppercase'}>{contactInfo.subtitle}</p>

          <div className={'text-gray-400 text-xl'}>
            <a href={'tel:' + contactInfo.number}>
              <div className={'text-shadow-special'}>{contactInfo.number}</div>
            </a>
            <a href={'mailto:' + contactInfo.email_address}>
              <div className={'text-shadow-special'}>
                {contactInfo.email_address}
              </div>
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

export default function Contact() {
  return (
    <Transition timeout={300}>
      {(state) => {
        return (
          <div className="subContainer" id="contact">
            <div
              className={
                'flex flex-col sm:flex-row sm:flex text-center sm:text-left'
              }
            >
              <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2 order-2'}>
                <div className="heading dark:text-primary-500">
                  {contactInfo.title}
                </div>
                <p className={'text-gray-400 uppercase'}>
                  {contactInfo.subtitle}
                </p>

                <div className={'text-gray-400 text-xl'}>
                  <a href={'tel:' + contactInfo.number}>
                    <div className={'text-shadow-special'}>
                      {contactInfo.number}
                    </div>
                  </a>
                  <a href={'mailto:' + contactInfo.email_address}>
                    <div className={'text-shadow-special'}>
                      {contactInfo.email_address}
                    </div>
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
      }}
    </Transition>
  )
}
