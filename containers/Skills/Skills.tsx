import React from 'react'
import DeveloperActivity from '../../components/developerActivity'
import { skillsSection } from '../../portfolio'
import { Fade } from 'react-awesome-reveal'

const Skills: React.FC = () => (
  <Fade triggerOnce={true}>
    <div className={'subContainer'} id="skills">
      <div className={'flex flex-col sm:flex-row sm:flex'}>
        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2 order-2'}>
          <DeveloperActivity />
        </div>

        <div
          className={
            'order-1 sm:order-2 sm:flex-1 mb-8 sm:w-1/2 w-full dark:text-primary-500 text-center sm:text-left sm:ml-8'
          }
        >
          <div className={'heading'}>{skillsSection.title} </div>
          <p className={'text-lg text-gray-400 sm:leading-10'}>
            {skillsSection.subTitle}
          </p>
          {/*<SoftwareSkill />*/}
          <div className={'text-lg text-gray-400 text-left'}>
            {skillsSection.skills.map((skills, idx) => {
              return (
                <p key={idx} className={'text-center sm:text-left'}>
                  {skills}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </Fade>
)

export default Skills
