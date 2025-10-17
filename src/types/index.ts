export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'
  icon?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate?: string
  current: boolean
  technologies: string[]
  achievements: string[]
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}
