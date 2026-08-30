import { featuredProjects } from '@/content/projects';
import GitHubRepos from './GitHubRepos';
import FeaturedProjectCard from './FeaturedProjectCard';

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="max-w-7xl mx-auto px-6 py-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-2">
        CH.03 / WORK
      </div>
      <h2 id="work-heading" className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-[2.5rem] tracking-[-0.02em] text-[var(--color-ink)] mb-16">
        Selected Works
      </h2>
      
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24">
        <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-muted)] mb-8">
          More on GitHub
        </h3>
        <GitHubRepos />
      </div>
    </section>
  );
}
