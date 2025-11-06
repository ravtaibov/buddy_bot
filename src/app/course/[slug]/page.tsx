'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CoursePageLayout } from '@/components/ui/course-page-layout'

interface Lesson {
  id: string
  title: string
  description: string
  content: string
}

interface Course {
  id?: string
  title: string
  description: string
  slug?: string
  lessons: Lesson[]
}

export default function CoursePage() {
  const params = useParams()
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      const courses: Course[] = JSON.parse(savedCourses)
      const foundCourse = courses.find(c => (c as any).slug === params.slug)
      if (foundCourse) {
        setCourse(foundCourse)
      }
    }
  }, [params.slug])

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Курс не найден</div>
      </div>
    )
  }

  return <CoursePageLayout course={course} />
}