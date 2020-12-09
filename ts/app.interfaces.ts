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
