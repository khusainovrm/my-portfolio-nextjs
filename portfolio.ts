import { IMenu, ISkillsSection, ITechStack, IUser } from './ts/app.interfaces'

export const userName: IUser = {
  name: 'Rinat Khusainov',
}

export const upperMenu: IMenu[] = [
  { name: 'Skills', link: '#skills' },
  { name: 'Work Experiences', link: '#experience' },
  { name: 'Contact Me', link: '#contact' },
]

export const greeting = {
  username: 'Rinat Khusainov',
  title: "Hi all, I'm Rinat",
  subTitle:
    'A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Nuxt / Nodejs  and some other cool libraries and frameworks.',
  resumeLink: '',
}

export const skillsSection: ISkillsSection = {
  title: 'What i do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    '⚡ Develop highly interactive Front end / User Interfaces for your web',
    '⚡ Integration of third party services such as Firebase',
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
  ],
}

export const techStack: ITechStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: 'Frontend/Design',
      progressPercentage: '90%',
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
}
