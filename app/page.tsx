'use client'

import ProjectsSection from '@/components/sections/ProjectsSection'
import { siteConfig } from '@/data/site-config'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Subtle Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-800/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-slate-800/25 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-medium text-slate-400 uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-md border border-slate-700">
                    Welcome
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="text-white">Hi, I'm</span>
                  <br />
                  <span className="text-slate-200 whitespace-nowrap">
                    Vishvam Samirkumar Patel
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                  Software developer specializing in{' '}
                  <span className="text-white font-medium">full-stack web development</span>{' '}
                  with expertise in modern frameworks and technologies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-lg"
                >
                  View My Work
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-slate-800 hover:border-slate-500"
                >
                  Get In Touch
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right Column - Professional Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden">
                      <img 
                        src="/images/Vishvam_Photo.jpg" 
                        alt="Vishvam Samirkumar Patel" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-slate-300 text-sm font-medium">Software Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-md border border-slate-700">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Overview</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I'm a dedicated full-stack developer with expertise in modern web technologies 
              and a focus on delivering scalable, maintainable solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="text-slate-300 mb-4">
                <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Expertise</h3>
              <p className="text-slate-400 leading-relaxed">
                I specialize in full-stack development using modern frameworks and technologies. 
                My experience spans from frontend interfaces to backend systems and database design.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-200">
              <div className="text-slate-300 mb-4">
                <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Problem Solving</h3>
              <p className="text-slate-400 leading-relaxed">
                I approach development challenges with a systematic methodology, focusing on 
                clean code, performance optimization, and user-centered design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-md border border-slate-700">
                Skills & Technologies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Stack</h2>
            <p className="text-lg text-slate-400">Technologies and frameworks I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB',
              'PostgreSQL', 'Tailwind CSS', 'FastAPI', 'Express.js', 'Git', 'Docker'
            ].map((skill, index) => (
              <div 
                key={skill} 
                className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-200"
              >
                <div className="text-sm font-medium text-white">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider bg-slate-800/50 px-4 py-2 rounded-md border border-slate-700">
                Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and challenging projects. 
              Let's discuss how we can collaborate to build something exceptional.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-12 border border-slate-700">
              <div className="text-center space-y-8">
                <div className="flex justify-center space-x-8">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-600 transition-all duration-200"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-600 transition-all duration-200"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-600 transition-all duration-200"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
                
                <button 
                  onClick={() => window.open('mailto:vishusp11@gmail.com?subject=Portfolio Inquiry&body=Hi Vishvam,%0D%0A%0D%0AI would like to discuss a potential opportunity with you.%0D%0A%0D%0ABest regards,', '_blank')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-lg"
                >
                  Send Email
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}