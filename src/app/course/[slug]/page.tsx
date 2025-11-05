'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Lesson {
  id: string
  title: string
  description: string
  content: string
}

interface Course {
  id: string
  title: string
  description: string
  slug: string
  lessons: Lesson[]
}

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<Course | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      const courses: Course[] = JSON.parse(savedCourses)
      const foundCourse = courses.find(c => c.slug === params.slug)
      if (foundCourse) {
        setCourse(foundCourse)
        if (foundCourse.lessons.length > 0) {
          setSelectedLesson(foundCourse.lessons[0])
        }
      }
    }
  }, [params.slug])

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-xl">Курс не найден</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-300 hover:text-white transition-colors mb-4"
          >
            ← Назад
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {course.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {course.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">
                Уроки ({course.lessons.length})
              </h2>
              <div className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedLesson?.id === lesson.id
                        ? 'bg-blue-500/30 border border-blue-400/50'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-600 text-gray-300'
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-white font-medium text-sm">
                          {lesson.title}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {selectedLesson.title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {selectedLesson.description}
                </p>
                <div className="prose prose-invert max-w-none">
                  <div 
                    className="text-gray-200 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: selectedLesson.content.replace(/\n/g, '<br>') }}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex items-center justify-center h-64">
                <p className="text-gray-400 text-lg">Выберите урок для просмотра</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}