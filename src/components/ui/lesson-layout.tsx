'use client'

import { useState } from 'react'
import { FilterButtons } from './filter-buttons'
import { BackButton } from './back-button'

interface LessonLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function LessonLayout({ title, description, children }: LessonLayoutProps) {
  const [isArchive, setIsArchive] = useState(false)

  const handleArchiveClick = () => {
    setIsArchive(true)
  }

  const handleCurrentClick = () => {
    setIsArchive(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 sm:p-6 lg:p-8 pt-10 sm:pt-14">
        {/* Back Button */}
        <div className="w-full max-w-2xl mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light">
            {description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="w-full max-w-2xl mb-6">
          <FilterButtons 
            isArchive={isArchive}
            onArchiveClick={handleArchiveClick}
            onCurrentClick={handleCurrentClick}
          />
        </div>

        {/* Content Area */}
        <div className="w-full max-w-2xl">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {isArchive ? 'Архивные уроки' : 'Актуальные уроки'}
            </h2>
            {children || (
              <p className="text-gray-300">
                Здесь будут отображаться уроки по {title.toLowerCase()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}