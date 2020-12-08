import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Toggle: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <div
        className={
          'cursor-pointer bg-primary-200 mx-auto text-center py-2 select-none w-max px-5 rounded-xl'
        }
        onClick={toggleTheme}
      >
        {isDark ? 'Status: dark' : 'Status: normal'}
      </div>
    </div>
  )
}

export default Toggle
