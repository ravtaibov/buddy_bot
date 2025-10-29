'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Lesson {
  id: string
  title: string
  description: string
  content: string
}

const courseData = {
  id: 'barber-from-scratch',
  title: 'Барбер с нуля',
  description: 'Полный курс обучения барберингу для начинающих мастеров',
  lessons: [
    {
      id: '1',
      title: 'Основы барберинга',
      description: 'Введение в профессию барбера, инструменты и оборудование',
      content: `Барберинг - это искусство мужской стрижки и ухода за волосами.

ОСНОВЫ ПРОФЕССИИ:

ИСТОРИЯ БАРБЕРИНГА:
• Древние традиции
• Современное развитие
• Культура барбершопов
• Профессиональные стандарты

ИНСТРУМЕНТЫ БАРБЕРА:

НОЖНИЦЫ:
• Прямые ножницы
• Филировочные ножницы
• Различные размеры
• Качество стали

МАШИНКИ:
• Роторные машинки
• Вибрационные машинки
• Триммеры
• Насадки и гребни

БРИТВЫ:
• Опасная бритва
• Безопасная бритва
• Одноразовые станки
• Техника безопасности

ДОПОЛНИТЕЛЬНЫЕ ИНСТРУМЕНТЫ:
• Расчески
• Щетки
• Пульверизаторы
• Накидки и полотенца`
    },
    {
      id: '2',
      title: 'Техники стрижки',
      description: 'Основные техники мужской стрижки',
      content: `Техники стрижки - основа мастерства барбера.

БАЗОВЫЕ ТЕХНИКИ:

СТРИЖКА НОЖНИЦАМИ:
• Техника "над расческой"
• Слайсинг
• Пойнт-каттинг
• Чоппинг

РАБОТА С МАШИНКОЙ:
• Фейдинг
• Тейперинг
• Создание переходов
• Работа с насадками

КОМБИНИРОВАННЫЕ ТЕХНИКИ:
• Ножницы + машинка
• Создание текстуры
• Финишная обработка
• Укладка`
    },
    {
      id: '3',
      title: 'Работа с машинкой',
      description: 'Техники работы с машинкой для стрижки',
      content: `Машинка - основной инструмент современного барбера.

ТЕХНИКИ РАБОТЫ:

ФЕЙДИНГ:
• Низкий фейд
• Средний фейд
• Высокий фейд
• Скин фейд

СОЗДАНИЕ ПЕРЕХОДОВ:
• Плавные переходы
• Резкие переходы
• Работа с направлением роста
• Коррекция недостатков

СПЕЦИАЛЬНЫЕ ТЕХНИКИ:
• Дизайнерские элементы
• Рисунки на волосах
• Создание линий
• Финишная обработка`
    }
  ]
}

export default function BarberFromScratchPage() {
  const router = useRouter()
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [activeTab, setActiveTab] = useState<'current' | 'archive'>('current')
  const [archived, setArchived] = useState<Set<string>>(new Set())

  const getFilteredLessons = () => {
    if (activeTab === 'archive') {
      return courseData.lessons.filter(lesson => archived.has(lesson.id))
    }
    return courseData.lessons.filter(lesson => !archived.has(lesson.id))
  }

  const toggleArchive = (lessonId: string) => {
    const newArchived = new Set(archived)
    if (newArchived.has(lessonId)) {
      newArchived.delete(lessonId)
    } else {
      newArchived.add(lessonId)
    }
    setArchived(newArchived)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            ← Назад
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {courseData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {courseData.description}
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('archive')}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
                  activeTab === 'archive'
                    ? 'bg-white/20 text-white border-2 border-white/30'
                    : 'bg-white/10 text-gray-300 border-2 border-white/10 hover:bg-white/15'
                }`}
              >
                Архив
              </button>
              <button
                onClick={() => setActiveTab('current')}
                className={`px-8 py-3 rounded-full text-lg font-medium transition-all ${
                  activeTab === 'current'
                    ? 'bg-white/20 text-white border-2 border-white/30'
                    : 'bg-white/10 text-gray-300 border-2 border-white/10 hover:bg-white/15'
                }`}
              >
                Актуальное
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-6">
                {activeTab === 'current' ? 'Актуальные уроки' : 'Архивные уроки'}
              </h2>
              
              <div className="space-y-3">
                {getFilteredLessons().map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`p-4 rounded-lg transition-all duration-200 ${
                      selectedLesson?.id === lesson.id
                        ? 'bg-blue-500/30 border border-blue-400/50'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => setSelectedLesson(lesson)}
                        className="flex items-start gap-3 flex-1 text-left"
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          selectedLesson?.id === lesson.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-base mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {lesson.description}
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
                
                {getFilteredLessons().length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-400">
                      {activeTab === 'current' ? 'Все уроки в архиве' : 'Архив пуст'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedLesson.title}
                    </h2>
                    <p className="text-gray-300">
                      {selectedLesson.description}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleArchive(selectedLesson.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      archived.has(selectedLesson.id)
                        ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                        : 'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                    }`}
                  >
                    {archived.has(selectedLesson.id) ? 'Восстановить' : 'В архив'}
                  </button>
                </div>
                
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