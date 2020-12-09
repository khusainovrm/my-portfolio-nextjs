import React from 'react'
import style from './Button.module.css'
import { IButton } from '../ts/app.interfaces'

export default function Button({ text, className, href, newTab }: IButton) {
  return (
    <div className={className}>
      <a className={style.mainButton} href={href} target={newTab && '_blank'}>
        {text}
      </a>
    </div>
  )
}
