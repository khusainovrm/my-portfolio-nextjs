import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import Header from '../components/Header'
import Greeting from '../containers/Greering/Greeting'
import Skills from '../containers/Skills/Skills'
import StackProgress from '../containers/StackProgress/StackProgress'
import WorkExperience from '../containers/WorkExperience/WorkExperience'
import Contact from '../containers/Contact/Contact'

const DARK_CLASS = 'dark'

const Home: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark((prevState) => !prevState)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS)
    } else {
      document.documentElement.classList.remove(DARK_CLASS)
    }
  }, [isDark])

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <Head>
        <title>Rinat Khusainov portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css"
        />
      </Head>

      <main className={'bg-primary-500 dark:bg-secondary-500 min-h-screen'}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default Home
