import React, { useContext, useState } from 'react'
import { upperMenu, userName } from '../../portfolio'
import ToggleSwitch from '../../components/ToggleSwitch'
import ThemeContext from '../../context/ThemeContext'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const fixedHeaderClass =
    'header relative mx-auto max-w-full sm:px-4 py-6 text-secondary-500 dark:text-primary-500 block sm:flex justify-between items-center'
  const fixedMenuClasses =
    'block sm:flex absolute sm:relative w-full bg-primary-500 dark:bg-secondary-500 sm:w-auto'
  const fixedLiClasses = 'sm:px-4 sm:py-6 px-2 py-4'
  const { isDark } = useContext(ThemeContext)

  return (
    <header className={isDark ? fixedHeaderClass + ' dark' : fixedHeaderClass}>
      <div className={'Logo flex items-center justify-between'}>
        <div className={'sm:hidden'} />
        <div className={'Logo__logo'}>
          {' '}
          <span className="grey-color sm:text-2xl">&lt; </span>
          <span
            className={
              'font-augustina text-3xl text-main-500 dark:text-primary-500'
            }
          >
            {userName.name}
          </span>
          <span className="grey-color sm:text-2xl"> /&gt;</span>
        </div>
        <div className="Logo__button block sm:hidden">
          {' '}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: 'white' }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className={isDark ? 'navicon navicon-dark' : 'navicon'} />
          </label>
        </div>
      </div>

      <ul
        className={`menu  ${
          showMenu ? fixedMenuClasses : fixedMenuClasses + ' hidden'
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
    </header>
  )
}
export default Header
