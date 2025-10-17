# GitHub Integration Setup

This portfolio website now includes dynamic GitHub project integration that automatically showcases your repositories with live links, tech stacks, and statistics.

## 🚀 Quick Setup

### 1. Update Your GitHub Username

Edit `src/config/github.ts` and replace `'vishvam-patel'` with your actual GitHub username:

```typescript
export const GITHUB_CONFIG = {
  username: 'your-github-username', // Replace with your actual GitHub username
  // ... rest of config
}
```

### 2. Customize Featured Projects

Update the `featuredRepos` array in `src/config/github.ts` to include your most important repositories:

```typescript
featuredRepos: [
  'your-best-project',
  'another-awesome-repo',
  'cool-web-app'
]
```

### 3. Update Project Data

Edit `src/data/projects.ts` to match your actual projects:

- Replace GitHub URLs with your actual repository links
- Update live demo URLs (if you have deployed projects)
- Modify project descriptions and technologies
- Add your actual project images

## ✨ Features

### 🎯 **Dynamic Project Showcase**
- **GitHub Integration**: Automatically fetches your public repositories
- **Live Demo Links**: Direct links to deployed applications
- **Tech Stack Badges**: Color-coded technology tags
- **Project Filtering**: Switch between "Featured" and "All Projects"
- **Hover Effects**: Interactive cards with smooth animations

### 📊 **GitHub Statistics**
- **Repository Count**: Total public repositories
- **Stars**: Total stars across all repos
- **Forks**: Total forks received
- **Language Usage**: Most used programming languages

### 🎨 **Modern Design Elements**
- **Gradient Backgrounds**: Beautiful color transitions
- **Animated Cards**: Smooth hover and lift effects
- **Responsive Design**: Works perfectly on all devices
- **Custom Scrollbar**: Styled scrollbar with gradient colors

## 🔧 Customization Options

### Project Cards
- **Featured Badge**: Highlight your best projects
- **Creation Date**: Shows when projects were created
- **Technology Tags**: Up to 4 technologies displayed with overflow indicator
- **Action Buttons**: GitHub and Live Demo buttons with hover animations

### GitHub Stats Widget
- **Real-time Data**: Fetches live data from GitHub API
- **Language Breakdown**: Shows your most used languages
- **Activity Metrics**: Stars, forks, and repository counts

## 📝 Adding New Projects

### Method 1: Update projects.ts (Recommended)
Add your project to `src/data/projects.ts`:

```typescript
{
  id: '7',
  title: 'Your New Project',
  description: 'Brief description of your project',
  longDescription: 'Detailed description...',
  image: '/images/your-project.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/yourusername/your-project',
  liveUrl: 'https://your-project.com',
  featured: true,
  category: 'web',
  createdAt: '2024-01-01',
}
```

### Method 2: GitHub API Integration
The system automatically fetches your GitHub repositories. To make them appear as featured:

1. Add the repository name to `featuredRepos` in `src/config/github.ts`
2. Ensure the repository has a good description
3. Add topics to your GitHub repository for better categorization

## 🎨 Styling Customization

### Technology Badge Colors
Edit the `techColors` object in `src/components/sections/ProjectsSection.tsx`:

```typescript
const techColors: { [key: string]: string } = {
  'Your Tech': 'bg-your-color text-white',
  // ... existing colors
}
```

### Animation Delays
Modify animation delays in the component:

```typescript
style={{ animationDelay: `${index * 100}ms` }}
```

## 🚀 Deployment Notes

- **GitHub API**: Uses public GitHub API (no authentication required)
- **Rate Limits**: GitHub API has rate limits, but they're generous for personal use
- **Caching**: Consider implementing caching for better performance
- **Error Handling**: Graceful fallback if GitHub API is unavailable

## 🔗 Links and Resources

- **GitHub API Documentation**: https://docs.github.com/en/rest
- **Repository Topics**: Add topics to your repos for better categorization
- **Live Demo Hosting**: Consider Vercel, Netlify, or GitHub Pages for hosting

---

**Pro Tip**: Keep your GitHub profile updated with good descriptions, topics, and README files. This will make your portfolio look more professional and informative!
