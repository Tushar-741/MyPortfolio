import React from 'react'

export default function Header({ data }) {
  return (
    <header className="flex items-start gap-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{data.name} <span className="ml-2 px-2 py-1 text-xs rounded-lg bg-indigo-50 text-indigo-700 font-medium">AI & ML</span></h1>
        <p className="text-sm text-gray-600 mt-1">{data.contact.email} • {data.contact.phone}</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a className="text-sm bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-3 py-1 rounded-full shadow-sm hover:opacity-95 transition" href={data.contact.github}>GitHub</a>
          <a className="text-sm bg-gradient-to-r from-cyan-400 to-indigo-500 text-white px-3 py-1 rounded-full shadow-sm hover:opacity-95 transition" href={data.contact.linkedin}>LinkedIn</a>
          <a className="text-sm text-indigo-600 underline-offset-2" href={data.codingProfiles.leetCode}>LeetCode</a>
          <a className="text-sm text-indigo-600 underline-offset-2" href={data.codingProfiles.geeksForGeeks}>GeeksforGeeks</a>
          <a className="text-sm text-indigo-600 underline-offset-2" href={data.codingProfiles.hackerRank}>HackerRank</a>
        </div>
      </div>
    </header>
  )
}
