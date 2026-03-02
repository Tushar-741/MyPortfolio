import React from 'react'

export default function ProjectCard({ p }) {
  return (
    <div className="card-border-gradient">
      <div className="transform transition hover:-translate-y-2 hover:shadow-2xl rounded-xl p-5 bg-white/80 backdrop-blur">
        <h4 className="font-semibold text-lg">{p.title}</h4>
        <p className="text-sm text-gray-700 mt-2">{p.description}</p>
        {p.stack && (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.split(',').map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{t.trim()}</span>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center gap-3">
          {p.url ? (
            <a className="text-white text-sm font-medium px-3 py-1 rounded bg-gradient-to-r from-indigo-600 to-pink-500 hover:opacity-95" href={p.url}>Open project</a>
          ) : (
            <span className="text-sm text-gray-500">Link coming soon</span>
          )}
          <span className="ml-auto text-xs text-gray-400">Django</span>
        </div>
      </div>
    </div>
  )
}
