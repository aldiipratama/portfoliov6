import { Computer, Home, Info, LucideIcon, Phone } from "lucide-react"

export type NavbarItems = {
  link: string,
  label: string,
  icon?: LucideIcon
}

export const navbarItems: NavbarItems[] = [
  {
    link: 'home',
    label: 'Home',
    icon: Home
  },
  {
    link: 'about',
    label: 'About',
    icon: Info
  },
  {
    link: 'projects',
    label: 'Projects',
    icon: Computer
  },
  {
    link: 'contact',
    label: 'Contact',
    icon: Phone
  }
]