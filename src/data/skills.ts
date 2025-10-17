import { Skill } from '@/types'

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend', icon: 'react' },
  { name: 'Next.js', level: 'expert', category: 'frontend', icon: 'nextjs' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend', icon: 'typescript' },
  { name: 'Tailwind CSS', level: 'expert', category: 'frontend', icon: 'tailwind' },
  { name: 'JavaScript', level: 'expert', category: 'frontend', icon: 'javascript' },
  { name: 'HTML/CSS', level: 'expert', category: 'frontend', icon: 'html' },
  
  // Backend
  { name: 'Node.js', level: 'advanced', category: 'backend', icon: 'nodejs' },
  { name: 'Express.js', level: 'advanced', category: 'backend', icon: 'express' },
  { name: 'Python', level: 'intermediate', category: 'backend', icon: 'python' },
  { name: 'Django', level: 'intermediate', category: 'backend', icon: 'django' },
  
  // Database
  { name: 'PostgreSQL', level: 'advanced', category: 'database', icon: 'postgresql' },
  { name: 'MongoDB', level: 'advanced', category: 'database', icon: 'mongodb' },
  { name: 'Prisma', level: 'intermediate', category: 'database', icon: 'prisma' },
  
  // DevOps
  { name: 'Docker', level: 'intermediate', category: 'devops', icon: 'docker' },
  { name: 'AWS', level: 'intermediate', category: 'devops', icon: 'aws' },
  { name: 'Vercel', level: 'advanced', category: 'devops', icon: 'vercel' },
  
  // Design
  { name: 'Figma', level: 'intermediate', category: 'design', icon: 'figma' },
  { name: 'Adobe XD', level: 'beginner', category: 'design', icon: 'adobe-xd' },
]
