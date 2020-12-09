import React from 'react'
import { ICardInfo } from '../ts/app.interfaces'

export default function ExperienceCard({ cardInfo }: { cardInfo: ICardInfo }) {
  return (
    <div className={'relative shadow-special rounded-2xl'}>
      <div className={'w-full bg-primary-600 py-10 px-6 rounded-t-2xl'}>
        <div className="experience-blurred_div" />
        <div className="experience-div-company">
          <h5 className="text-center text-2xl">{cardInfo.company}</h5>
        </div>
      </div>
      <div className="text-center py-6 px-6">
        <h5 className={'text-2xl'}>{cardInfo.role}</h5>
        <h5 className={'text-xl mb-2'}>{cardInfo.date}</h5>
        <p className={'text-gray-400 mb-2'}>{cardInfo.desc}</p>
        <ul>
          <li className={'text-gray-400'}>{cardInfo.descBullets[0]}</li>
        </ul>
      </div>
    </div>
  )
}
