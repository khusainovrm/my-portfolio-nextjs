import React from 'react'
import DeveloperActivity from '../../components/developerActivity'
import { skillsSection } from '../../portfolio'

const Skills: React.FC = () => (
  <div className={'subContainer'} id="greeting">
    <div className={'flex flex-col sm:flex-row sm:flex'}>
      <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2 order-2'}>
        <DeveloperActivity />
      </div>

      <div
        className={
          'order-1 sm:order-2 sm:flex-1 mb-8 sm:w-1/2 w-full dark:text-primary-500 text-center sm:text-left sm:ml-8'
        }
      >
        <h1 className={'text-4xl'}>{skillsSection.title} </h1>
        <p className={'text-lg text-gray-400 sm:leading-10'}>
          {skillsSection.subTitle}
        </p>
        {/*<SoftwareSkill />*/}
        <div className={'text-lg text-gray-400 text-left'}>
          {skillsSection.skills.map((skills, idx) => {
            return (
              <p key={idx} className={'dark'}>
                {skills}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  </div>
)

export default Skills
