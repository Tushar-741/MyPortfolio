import React from 'react'

export default function Nav() {
  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Tushar Sharma</div>
        <div className="hidden sm:flex gap-4 text-sm">
          <a className="text-gray-600 hover:text-indigo-600 transition" href="#projects">Projects</a>
          <a className="text-gray-600 hover:text-indigo-600 transition" href="#skills">Skills</a>
          <a className="text-gray-600 hover:text-indigo-600 transition" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
