import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <div id="projects" className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <div key={p.title} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
          <ProjectCard p={p} />
        </div>
      ))}
    </div>
  )
}
