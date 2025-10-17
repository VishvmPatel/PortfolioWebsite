'use client'

import { useState, useEffect } from 'react'
import { GITHUB_CONFIG } from '@/config/github'

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  homepage: string
  language: string
  languages_url: string
  created_at: string
  updated_at: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  private: boolean
  languages?: { [key: string]: number }
}

interface GitHubStats {
  totalStars: number
  totalForks: number
  totalRepos: number
  languages: { [key: string]: number }
}

export function useGitHubData(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
        if (!reposResponse.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const reposData: GitHubRepo[] = await reposResponse.json()
        
        // Filter out private repos and get public ones
        const publicRepos = reposData.filter(repo => !repo.private)
        
        // Fetch languages for each repo
        const reposWithLanguages = await Promise.all(
          publicRepos.map(async (repo) => {
            try {
              const languagesResponse = await fetch(repo.languages_url)
              if (languagesResponse.ok) {
                const languages = await languagesResponse.json()
                return { ...repo, languages }
              }
              return repo
            } catch {
              return repo
            }
          })
        )

        setRepos(reposWithLanguages)

        // Calculate stats
        const totalStars = publicRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
        const totalForks = publicRepos.reduce((sum, repo) => sum + repo.forks_count, 0)
        const totalRepos = publicRepos.length

        // Calculate language usage
        const languages: { [key: string]: number } = {}
        reposWithLanguages.forEach(repo => {
          if (repo.languages) {
            Object.entries(repo.languages).forEach(([lang, bytes]) => {
              languages[lang] = (languages[lang] || 0) + (bytes as number)
            })
          }
        })

        setStats({
          totalStars,
          totalForks,
          totalRepos,
          languages
        })

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchGitHubData()
    }
  }, [username])

  return { repos, stats, loading, error }
}

// Component to display GitHub stats
export function GitHubStats({ username = GITHUB_CONFIG.username }: { username?: string }) {
  const { stats, loading, error } = useGitHubData(username)

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }

  if (error || !stats) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub Activity
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.totalRepos}</div>
          <div className="text-sm text-gray-300">Repositories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.totalStars}</div>
          <div className="text-sm text-gray-300">Stars</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">{stats.totalForks}</div>
          <div className="text-sm text-gray-300">Forks</div>
        </div>
      </div>

      {/* Top Languages */}
      <div>
        <h4 className="text-sm font-medium text-gray-300 mb-2">Top Languages</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(stats.languages)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([lang]) => (
              <span key={lang} className="px-2 py-1 bg-gray-700 rounded text-xs">
                {lang}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
