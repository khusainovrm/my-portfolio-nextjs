import React from 'react'
import { workExperiences } from '../../portfolio'
import ExperienceCard from '../../components/ExperienceCard'

export default function WorkExperience() {
  return (
    <div id="experience" className={'subContainer'}>
      <div className="experience-container" id="workExperience">
        <div>
          <div className="heading dark:text-primary-500">Experiences</div>
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, idx) => {
              return (
                <ExperienceCard
                  key={idx}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    role: card.role,
                    descBullets: card.descBullets,
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
