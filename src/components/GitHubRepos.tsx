import { fallbackRepos, languageColors, GitHubRepo } from '@/content/projects';
import { Star } from 'lucide-react';

export const revalidate = 3600;

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
}

export default async function GitHubRepos() {
  let repos: GitHubRepo[] = [];

  try {
    const res = await fetch('https://api.github.com/users/sivaprasath550/repos?sort=updated&per_page=100', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from GitHub');
    }

    const data = await res.json();
    
    const formattedRepos = data
      .filter((repo: any) => !repo.fork && repo.name !== 'My-Portfolio' && repo.name !== 'sivaprasath550')
      .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .slice(0, 6)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description || '',
        language: repo.language || 'Unknown',
        languageColor: repo.language ? (languageColors[repo.language] || '#888') : '#888',
        stars: repo.stargazers_count,
        pushedAt: repo.pushed_at,
        url: repo.html_url,
      }));
      
    repos = formattedRepos.length > 0 ? formattedRepos : fallbackRepos;
  } catch (error) {
    repos = fallbackRepos;
  }

  if (repos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <a 
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--color-edge)] rounded-[4px] bg-[var(--color-panel)] p-5 hover:border-[var(--color-trace)]/30 transition-colors duration-200 block group"
        >
          <h4 className="font-mono text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-trace)] transition-colors">
            {repo.name}
          </h4>
          <p className="text-xs text-[var(--color-muted)] mt-2 line-clamp-2 h-8">
            {repo.description}
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-xs font-mono text-[var(--color-muted)]">
            <div className="flex items-center gap-1.5">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: repo.languageColor }}
              />
              {repo.language}
            </div>
            
            <div className="flex items-center gap-1">
              <Star size={12} />
              {repo.stars}
            </div>
            
            <div className="ml-auto">
              {formatRelativeTime(repo.pushedAt)}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
