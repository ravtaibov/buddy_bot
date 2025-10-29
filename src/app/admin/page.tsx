'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Lesson {
  id: string
  title: string
  description: string
  videoUrl?: string
  duration?: string
}

interface Course {
  id: string
  title: string
  description: string
  category: 'beginners' | 'experienced'
  slug: string
  lessons: Lesson[]
}

export default function AdminPanel() {
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'courses' | 'lessons'>('courses')
  const router = useRouter()

  // Форма для курса
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    category: 'beginners' as 'beginners' | 'experienced'
  })

  // Форма для урока
  const [lessonForm, setLessonForm] = useState({
    title: '',
    description: '',
    videoUrl: '',
    duration: ''
  })

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses')
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses))
    }
  }, [])

  // Сохранение в localStorage
  const saveCourses = (newCourses: Course[]) => {
    setCourses(newCourses)
    localStorage.setItem('courses', JSON.stringify(newCourses))
  }

  // Создание slug из названия
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[а-я]/g, (char) => {
        const map: { [key: string]: string } = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
          'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
          'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
          'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
          'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        }
        return map[char] || char
      })
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  // Добавление курса
  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault()
    if (!courseForm.title.trim()) return

    const newCourse: Course = {
      id: Date.now().toString(),
      title: courseForm.title,
      description: courseForm.description,
      category: courseForm.category,
      slug: createSlug(courseForm.title),
      lessons: []
    }

    const newCourses = [...courses, newCourse]
    saveCourses(newCourses)

    setCourseForm({ title: '', description: '', category: 'beginners' })
  }

  // Добавление урока
  const handleAddLesson = (e: React.FormEvent) => {
    e.preventDefault()
    if (!lessonForm.title.trim() || !selectedCourse) return

    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: lessonForm.title,
      description: lessonForm.description,
      videoUrl: lessonForm.videoUrl,
      duration: lessonForm.duration
    }

    const newCourses = courses.map(course => 
      course.id === selectedCourse 
        ? { ...course, lessons: [...course.lessons, newLesson] }
        : course
    )

    saveCourses(newCourses)
    setLessonForm({ title: '', description: '', videoUrl: '', duration: '' })
  }

  // Удаление курса
  const deleteCourse = (courseId: string) => {
    const newCourses = courses.filter(course => course.id !== courseId)
    saveCourses(newCourses)
    if (selectedCourse === courseId) {
      setSelectedCourse(null)
    }
  }

  // Удаление урока
  const deleteLesson = (courseId: string, lessonId: string) => {
    const newCourses = courses.map(course => 
      course.id === courseId 
        ? { ...course, lessons: course.lessons.filter(lesson => lesson.id !== lessonId) }
        : course
    )
    saveCourses(newCourses)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-gray-300 hover:text-white transition-colors duration-200 mb-4"
          >
            ← Назад на главную
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">
            Админ панель
          </h1>
          <p className="text-gray-300">
            Управление курсами и уроками
          </p>
        </div>

        {/* Табы */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'courses'
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Курсы
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'lessons'
                  ? 'bg-white/20 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Уроки
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка - Формы */}
          <div className="space-y-6">
            {activeTab === 'courses' ? (
              /* Форма добавления курса */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Добавить курс</h2>
                <form onSubmit={handleAddCourse} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Название курса</label>
                    <input
                      type="text"
                      value={courseForm.title}
                      onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      placeholder="Введите название курса"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Описание</label>
                    <textarea
                      value={courseForm.description}
                      onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 h-24 resize-none"
                      placeholder="Описание курса"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Категория</label>
                    <select
                      value={courseForm.category}
                      onChange={(e) => setCourseForm({...courseForm, category: e.target.value as 'beginners' | 'experienced'})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'white'
                      }}
                    >
                      <option value="beginners" style={{ backgroundColor: '#1f2937', color: 'white' }}>Начинающим мастерам</option>
                      <option value="experienced" style={{ backgroundColor: '#1f2937', color: 'white' }}>Опытным мастерам</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Добавить курс
                  </button>
                </form>
              </div>
            ) : (
              /* Форма добавления урока */
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Добавить урок</h2>
                
                {/* Выбор курса */}
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Выберите курс</label>
                  <select
                    value={selectedCourse || ''}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'white'
                    }}
                    required
                  >
                    <option value="" style={{ backgroundColor: '#1f2937', color: 'white' }}>Выберите курс</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id} style={{ backgroundColor: '#1f2937', color: 'white' }}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <form onSubmit={handleAddLesson} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Название урока</label>
                    <input
                      type="text"
                      value={lessonForm.title}
                      onChange={(e) => setLessonForm({...lessonForm, title: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      placeholder="Введите название урока"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Описание урока</label>
                    <textarea
                      value={lessonForm.description}
                      onChange={(e) => setLessonForm({...lessonForm, description: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 h-24 resize-none"
                      placeholder="Описание урока"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Ссылка на видео (опционально)</label>
                    <input
                      type="url"
                      value={lessonForm.videoUrl}
                      onChange={(e) => setLessonForm({...lessonForm, videoUrl: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      placeholder="https://youtube.com/watch?v=..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Длительность (опционально)</label>
                    <input
                      type="text"
                      value={lessonForm.duration}
                      onChange={(e) => setLessonForm({...lessonForm, duration: e.target.value})}
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                      placeholder="например: 15 мин"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedCourse}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    Добавить урок
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Правая колонка - Список */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              {activeTab === 'courses' ? 'Созданные курсы' : 'Уроки в курсах'}
            </h2>
            
            {activeTab === 'courses' ? (
              /* Список курсов */
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {courses.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">Курсы не созданы</p>
                ) : (
                  courses.map(course => (
                    <div key={course.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white">{course.title}</h3>
                        <button
                          onClick={() => deleteCourse(course.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Удалить
                        </button>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-blue-600/30 text-blue-200 px-2 py-1 rounded">
                          {course.category === 'beginners' ? 'Начинающим' : 'Опытным'}
                        </span>
                        <span className="text-xs text-gray-400">
                          Уроков: {course.lessons.length}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              /* Список уроков */
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {courses.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">Сначала создайте курсы</p>
                ) : (
                  courses.map(course => (
                    <div key={course.id} className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-3">{course.title}</h3>
                      {course.lessons.length === 0 ? (
                        <p className="text-gray-400 text-sm ml-4">Уроки не добавлены</p>
                      ) : (
                        <div className="space-y-2 ml-4">
                          {course.lessons.map(lesson => (
                            <div key={lesson.id} className="bg-white/5 rounded-lg p-3 border border-white/10">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="text-white font-medium">{lesson.title}</h4>
                                <button
                                  onClick={() => deleteLesson(course.id, lesson.id)}
                                  className="text-red-400 hover:text-red-300 text-xs"
                                >
                                  Удалить
                                </button>
                              </div>
                              <p className="text-gray-300 text-xs">{lesson.description}</p>
                              {lesson.duration && (
                                <span className="text-xs text-blue-300">{lesson.duration}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}