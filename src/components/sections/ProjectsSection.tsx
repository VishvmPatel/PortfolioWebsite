'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import { Project } from '@/types'
import { GITHUB_CONFIG } from '@/config/github'

const techColors: { [key: string]: string } = {
  'Next.js': 'bg-slate-700 text-white',
  'React': 'bg-slate-700 text-white',
  'Vue.js': 'bg-slate-700 text-white',
  'TypeScript': 'bg-slate-700 text-white',
  'JavaScript': 'bg-slate-700 text-white',
  'Node.js': 'bg-slate-700 text-white',
  'Tailwind CSS': 'bg-slate-700 text-white',
  'CSS3': 'bg-slate-700 text-white',
  'Prisma': 'bg-slate-700 text-white',
  'PostgreSQL': 'bg-slate-700 text-white',
  'MongoDB': 'bg-slate-700 text-white',
  'Express': 'bg-slate-700 text-white',
  'Express.js': 'bg-slate-700 text-white',
  'Socket.io': 'bg-slate-700 text-white',
  'Socket.IO': 'bg-slate-700 text-white',
  'Stripe': 'bg-slate-700 text-white',
  'AWS S3': 'bg-slate-700 text-white',
  'Docker': 'bg-slate-700 text-white',
  'Redis': 'bg-slate-700 text-white',
  'Chart.js': 'bg-slate-700 text-white',
  'D3.js': 'bg-slate-700 text-white',
  'Material-UI': 'bg-slate-700 text-white',
  'Framer Motion': 'bg-slate-700 text-white',
  'Vercel': 'bg-slate-700 text-white',
  'Vite': 'bg-slate-700 text-white',
  'OpenAI API': 'bg-slate-700 text-white',
  'OpenWeather API': 'bg-slate-700 text-white',
  'Python': 'bg-slate-700 text-white',
  'FastAPI': 'bg-slate-700 text-white',
  'Google Gemini AI': 'bg-slate-700 text-white',
  'SQLite': 'bg-slate-700 text-white',
  'SQLAlchemy': 'bg-slate-700 text-white',
  'HTML5': 'bg-slate-700 text-white',
  'React.js': 'bg-slate-700 text-white',
  'ChatBot API': 'bg-slate-700 text-white',
  'JWT': 'bg-slate-700 text-white',
  'PayU': 'bg-slate-700 text-white',
  'bcrypt': 'bg-slate-700 text-white',
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects

  return (
    <section className="relative py-20 z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-md border border-slate-700">
              Featured Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Portfolio Showcase</h2>
          <p className="text-lg text-slate-400">A showcase of my recent work and open-source contributions</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-slate-800/50 p-1 border border-slate-700">
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:shadow-lg">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-40">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white text-slate-900 rounded-md px-3 py-1 text-xs font-medium shadow-lg">
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-900/90 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-900 transition-colors flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/90 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition-colors flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-md text-xs font-medium ${
                          techColors[tech] || 'bg-slate-700 text-white'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-md text-xs font-medium bg-slate-700 text-white">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-center text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Open Source</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_CONFIG.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
