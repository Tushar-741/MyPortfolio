import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 text-center text-sm text-gray-500">
      <div>Built with React + Tailwind — Portfolio generated</div>
      <div className="mt-2">© {new Date().getFullYear()} Tushar Sharma</div>
    </footer>
  )
}
