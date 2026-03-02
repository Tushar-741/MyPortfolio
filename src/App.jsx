import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'
import resume from './data/resume'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      <div className="absolute -right-40 -top-28 w-96 h-96 blob bg-gradient-to-tr from-indigo-300 to-pink-300 opacity-20 floaty"></div>
      <div className="absolute -left-40 -bottom-28 w-80 h-80 blob bg-gradient-to-tr from-cyan-200 to-indigo-300 opacity-16 floaty" style={{animationDelay: '200ms'}}></div>
      <Nav />
      <main className="max-w-5xl mx-auto p-6">
        <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-md card-border-gradient">
          <Header data={resume} />
          <Hero summary={resume.summary} />

          <section className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-2 text-gray-700">
                <p className="font-medium">{resume.education.college.name}</p>
                <p>{resume.education.college.degree} — {resume.education.college.years}</p>
                <p className="mt-2 font-medium">{resume.education.school.name}</p>
                <p>{resume.education.school.details}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Skills & Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {resume.skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">{s}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold">Achievements</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              {resume.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </section>

          <section className="mt-6">
            <h3 className="text-xl font-semibold">Projects</h3>
            <Projects projects={resume.projects} />
          </section>

          <section className="mt-8 text-center text-sm text-gray-600">
            <p>Contact: {resume.contact.email} • {resume.contact.phone}</p>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  )
}
