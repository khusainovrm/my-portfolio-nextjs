import React from 'react'
import Button from '../../components/Button'
import { greeting } from '../../portfolio'
import ImageManOnTable from '../../components/ImageManOnTable'
import cn from 'classnames'

export default function Greeting() {
  return (
    <div className={'mt-16 w-11/12 py-6 px-3 my-0 mx-auto'} id="greeting">
      <div className={'sm:flex'}>
        <div
          className={
            'sm:flex-1 mb-8 sm:w-1/2 w-full dark:text-primary-500 text-center sm:text-left'
          }
        >
          <div>
            <h1 className={cn(' text-3xl sm:text-5xl')}>
              {greeting.title} <span className={''} />
            </h1>
            <p className={'text-lg sm:text-xl text-gray-400 sm:leading-10'}>
              {greeting.subTitle}
            </p>
            SocialMedia
            <div className={''}>
              <Button text="Contact me" href="#contact" />
            </div>
          </div>
        </div>
        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2'}>
          {<ImageManOnTable />}
        </div>
      </div>
    </div>
  )
}