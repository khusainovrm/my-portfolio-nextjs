export interface ITheme {
  isDark: boolean
  toggleTheme: () => void
}

export interface IUser {
  name: string
}

export interface IMenu {
  name: string
  link: string
}

export interface IButton {
  text: string
  className?: string
  href: string
  newTab?: string
}

export interface ISkillsSection {
  title: string
  subTitle: string
  skills: string[]
  softwareSkills: object[]
}

export interface ITechStack {
  viewSkillBars: boolean
  experience: {
    Stack: string
    progressPercentage: string
  }[]
}
