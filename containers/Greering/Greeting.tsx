import React from 'react'
import Button from '../../components/Button'
import { greeting } from '../../portfolio'
import ImageManOnTable from '../../components/ImageManOnTable'

export default function Greeting() {
  return (
    <div className={'subContainer'} id="greeting">
      <div className={'sm:flex'}>
        <div
          className={
            'sm:flex-1 mb-8 sm:w-1/2 w-full dark:text-primary-500 text-center sm:text-left'
          }
        >
          <div>
            <div className={'heading font-black'}>
              {greeting.title} <span className={''} />
            </div>
            <p className={'text-lg sm:text-xl text-gray-400 sm:leading-10'}>
              {greeting.subTitle}
            </p>
          </div>
          <div className={'btn-main'}>
            <Button text="Contact me" href="#contact" />
          </div>
        </div>
        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2'}>
          <ImageManOnTable />
        </div>
      </div>
    </div>
  )
}
