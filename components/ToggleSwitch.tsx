import React, { useState, useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ToggleSwitch: React.FC = () => {
  const [isChecked, setChecked] = useState(false)
  const themeContext = useContext(ThemeContext)

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          themeContext.toggleTheme()
          setChecked(!isChecked)
        }}
      />
      <span className="slider round" />
    </label>
  )
}
export default ToggleSwitch
