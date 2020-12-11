import { upperMenu } from '../portfolio'
import ToggleSwitch from './ToggleSwitch'
import React, { useRef } from 'react'

const menu = ({ showMenu }: { showMenu: boolean }) => {
  const fixedMenuClasses =
    'block sm:flex absolute sm:relative w-full bg-primary-500 dark:bg-secondary-500 sm:w-auto ease-out transition-transform transform shadow-md sm:shadow-none'
  const fixedLiClasses = 'sm:py-6 px-4 py-4'
  const menuRef = useRef(null)

  return (
    <ul
      ref={menuRef}
      className={`menu ${
        showMenu
          ? fixedMenuClasses
          : fixedMenuClasses + ' -translate-x-full sm:translate-x-0'
      }`}
    >
      {upperMenu.map((menuItem, index) => {
        return (
          <li key={index} className={fixedLiClasses}>
            <a href={menuItem.link}>{menuItem.name}</a>
          </li>
        )
      })}
      <li className={fixedLiClasses}>
        <ToggleSwitch />
      </li>
    </ul>
  )
}

export default menu
