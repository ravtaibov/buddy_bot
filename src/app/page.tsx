'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FlipButton } from '@/components/ui/flip-button'

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

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const router = useRouter()
  const [isFlipped, setIsFlipped] = useState(false)
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses))
    }
  }, [])

  // Старые статичные курсы
  const staticCoursesData: { [key: string]: string[] | any[] } = {
    'Для начинающих': [
      'Барбер с нуля',
      'Мужские стрижки',
      'Женские стрижки',
      'Колористика',
      'Стрижки машинкой',
      'Укладки и стайлинг'
    ],
    'Для опытных': [
      'Сложные техники стрижки',
      'Работа с проблемными волосами',
      'Авторские техники'
    ]
  }

  // Объединяем старые курсы с новыми из админки
  const coursesData: { [key: string]: string[] | any[] } = { ...staticCoursesData }
  
  if (courses.length > 0) {
    coursesData['Авторские курсы'] = courses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description,
      duration: `${course.lessons.length} урок${course.lessons.length === 1 ? '' : course.lessons.length < 5 ? 'а' : 'ов'}`,
      level: 'Все уровни',
      isCustomCourse: true
    }))
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  const navigateToCourse = (course: string) => {
    // Маппинг названий курсов к их URL-слагам
    const courseMapping: { [key: string]: string } = {
      // Курсы для начинающих
      'Барбер с нуля': 'barber-from-scratch',
      'Мужские стрижки': 'mens-haircuts',
      'Женские стрижки': 'womens-haircuts',
      'Колористика': 'coloristics',
      'Стрижки машинкой': 'clipper-cuts',
      'Укладки и стайлинг': 'styling',
      
      // Курсы для опытных
      'Сложные техники стрижки': 'advanced-cutting',
      'Работа с проблемными волосами': 'problem-hair',
      'Авторские техники': 'signature-techniques'
    }
    
    const courseSlug = courseMapping[course]
    if (courseSlug) {
      router.push(`/course/${courseSlug}`)
    } else {
      console.error(`Курс "${course}" не найден в маппинге`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 sm:p-6 lg:p-8 pt-10 sm:pt-14">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Школа <span 
              onClick={() => router.push('/admin')}
              className="cursor-pointer hover:scale-105 transition-transform duration-200 hover:text-blue-300"
            >
              Buddy
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light">
            Обучаем парикмахерскому искусству
          </p>
        </div>

        {!selectedCategory ? (
          // Main categories view
          <div className="w-full max-w-2xl space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl text-gray-300/80 font-light mb-6">
                 Выбери направление обучения
               </h3>
             </div>

             <div className="grid gap-4 sm:gap-6">
               <div 
                 onClick={() => handleCategorySelect('beginners')}
                 className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 group"
               >
                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center group-hover:text-blue-200 transition-colors duration-300">
                   Начинающим мастерам
                 </h3>
                 <p className="text-gray-300 text-center text-sm sm:text-base">
                   Основы парикмахерского искусства с нуля
                 </p>
               </div>

               <div 
                 onClick={() => handleCategorySelect('experienced')}
                 className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 group"
               >
                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center group-hover:text-purple-200 transition-colors duration-300">
                   Опытным мастерам
                 </h3>
                 <p className="text-gray-300 text-center text-sm sm:text-base">
                   Продвинутые техники и специализация
                 </p>
               </div>

               {courses.length > 0 && (
                 <div 
                   onClick={() => handleCategorySelect('custom')}
                   className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 group"
                 >
                   <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center group-hover:text-green-200 transition-colors duration-300">
                     Авторские курсы
                   </h3>
                   <p className="text-gray-300 text-center text-sm sm:text-base">
                     Эксклюзивные курсы от наших мастеров
                   </p>
                 </div>
               )}
             </div>


          </div>
        ) : (
          // Course list view
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <button
                onClick={handleBackToCategories}
                className="text-gray-300 hover:text-white transition-colors duration-200 mb-4"
              >
                ← Назад к выбору направления
              </button>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {selectedCategory === 'beginners' ? 'Начинающим мастерам' : 
                 selectedCategory === 'experienced' ? 'Опытным мастерам' : 'Авторские курсы'}
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
              <div className="space-y-3">
                {/* Старые статичные курсы */}
                {selectedCategory === 'beginners' && staticCoursesData['Для начинающих'].map((course, index) => (
                  <div
                    key={index}
                    onClick={() => navigateToCourse(course)}
                    className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:shadow-white/5 cursor-pointer group"
                  >
                    <h3 className="text-base sm:text-lg text-white font-medium group-hover:text-blue-200 transition-colors duration-200">
                      {course}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">Доступен</p>
                  </div>
                ))}
                
                {selectedCategory === 'experienced' && staticCoursesData['Для опытных'].map((course, index) => (
                  <div
                    key={index}
                    onClick={() => navigateToCourse(course)}
                    className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:shadow-white/5 cursor-pointer group"
                  >
                    <h3 className="text-base sm:text-lg text-white font-medium group-hover:text-blue-200 transition-colors duration-200">
                      {course}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">Доступен</p>
                  </div>
                ))}
                
                {/* Новые курсы из админки - показываем только в категории custom */}
                {selectedCategory === 'custom' && courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => router.push(`/course/${course.slug}`)}
                    className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-200 hover:scale-[1.01] hover:shadow-md hover:shadow-white/5 cursor-pointer group"
                  >
                    <h3 className="text-base sm:text-lg text-white font-medium group-hover:text-blue-200 transition-colors duration-200">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">{course.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">
                        {course.lessons.length} урок{course.lessons.length === 1 ? '' : course.lessons.length < 5 ? 'а' : 'ов'}
                      </span>
                      <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">
                        Доступен
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  )
}
