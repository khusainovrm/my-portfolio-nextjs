import React from 'react'
import { techStack } from '../../portfolio'
import Skills from '../../components/Skills'

export default function StackProgress() {
  return (
    <div className={'subContainer'} id="greeting">
      <div className={'sm:flex'}>
        <div
          className={
            'sm:flex-1 mb-8 sm:w-1/2 w-full dark:text-primary-500 text-center sm:text-left sm:mr-8'
          }
        >
          <div className="skills-bar">
            <h1 className={'heading'}>Proficiency</h1>
            {techStack.experience.map((exp, idx) => {
              const progressStyle = {
                width: exp.progressPercentage,
              }
              return (
                <div className={'relative'} key={idx}>
                  <div className={'my-4'}>{exp.Stack}</div>
                  <div className="meter">
                    <span
                      style={progressStyle}
                      className={
                        'absolute left-0 h-full bg-main-300 rounded-2xl'
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={'sm:flex-1 flex-1 mb-8 w-full sm:w-1/2'}>
          <Skills />
        </div>
      </div>
    </div>
  )
}
