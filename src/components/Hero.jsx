import React from 'react'

export default function Hero({ summary }) {
  return (
    <section className="mt-4 relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="absolute -left-20 -top-16 w-56 h-56 blob bg-gradient-to-tr from-indigo-400 to-pink-400 rounded-full opacity-40 floaty"></div>
      <div className="absolute -right-20 -bottom-12 w-72 h-72 blob bg-gradient-to-tr from-cyan-300 to-indigo-400 rounded-full opacity-30 floaty" style={{animationDelay: '400ms'}}></div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between relative">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">Aspiring Software Engineer</h2>
          <p className="mt-2 text-gray-700 max-w-xl">{summary}</p>
          <div className="mt-4 flex gap-3">
            <a href="#projects" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg shadow cta-pulse transition">View Projects</a>
            <a href="#contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">Contact</a>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">TS</div>
          <div className="text-sm text-gray-600">
            <div className="font-medium">Galgotias College — B.Tech AI & ML</div>
            <div className="mt-1 text-sm text-gray-500">150+ coding problems • Backend & Django</div>
          </div>
        </div>
      </div>
    </section>
  )
}
