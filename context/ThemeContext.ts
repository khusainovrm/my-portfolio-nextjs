import React from 'react'
import themes from './themes'
import { ITheme } from '../ts/app.interfaces'

const ThemeContext = React.createContext<ITheme>(themes)
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export default ThemeContext
