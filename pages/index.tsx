import Head from 'next/head'
import Main from '../containers/Main'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '../components/Header'
import Toggle from '../components/Toggle'
const DARK_CLASS = 'dark'

const Home: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [isDark])

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <div>
        <Head>
          <title>Rinat Khusainov portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header />
          <Main />
          <Toggle />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Home
