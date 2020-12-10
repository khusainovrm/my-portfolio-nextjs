import React from 'react'
import { ICardInfo } from '../ts/app.interfaces'

export default function ExperienceCard({ cardInfo }: { cardInfo: ICardInfo }) {
  return (
    <div className={'relative shadow-special rounded-2xl'}>
      <div
        className={
          'w-full bg-primary-600 px-4 py-6 sm:px-6 sm:py-10 rounded-t-2xl'
        }
      >
        <div className="experience-blurred_div" />
        <div className="experience-div-company">
          <div className="text-center text-2xl">{cardInfo.company}</div>
        </div>
      </div>
      <div className="text-center py-6 px-6 border rounded-b-2xl">
        <div className={'text-2xl dark:text-primary-500'}>{cardInfo.role}</div>
        <div className={'text-xl mb-2 dark:text-primary-500'}>
          {cardInfo.date}
        </div>
        <p className={'text-gray-400 mb-2'}>{cardInfo.desc}</p>
        <ul>
          <li className={'text-gray-400'}>{cardInfo.descBullets[0]}</li>
        </ul>
      </div>
    </div>
  )
}
