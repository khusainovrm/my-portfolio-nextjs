import React, { useContext, useState } from 'react'
import { userName } from '../../portfolio'
import ThemeContext from '../../context/ThemeContext'
import Menu from '../../components/Menu'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const fixedHeaderClass =
    'header relative mx-auto max-w-full sm:px-4 py-6 text-secondary-500 dark:text-primary-500 block sm:flex justify-between items-center'

  const { isDark } = useContext(ThemeContext)
  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <header className={fixedHeaderClass}>
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
            onClick={toggleMenu}
          >
            <span className={isDark ? 'navicon navicon-dark' : 'navicon'} />
          </label>
        </div>
      </div>

      <Menu showMenu={showMenu} />
    </header>
  )
}

export default Header
