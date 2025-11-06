'use client'
import { CoursePageLayout } from '@/components/ui/course-page-layout'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Lesson {
  id: string
  title: string
  description: string
  content: string
}

const courseData = {
  id: 'advanced-cutting',
  title: 'Сложные техники стрижки',
  description: 'Продвинутый курс для опытных мастеров, изучающих сложные техники стрижки',
  lessons: [
    {
      id: '1',
      title: 'Градуированные стрижки',
      description: 'Изучение сложных градуированных техник',
      content: `Градуированные стрижки - основа продвинутого мастерства.

ОСНОВНЫЕ ПРИНЦИПЫ ГРАДУИРОВКИ:

ПОНИМАНИЕ УГЛОВ СРЕЗА:
• Работа с различными зонами головы
• Создание плавных переходов
• Техники наслоения
• Контроль объема

ПРАКТИЧЕСКИЕ ТЕХНИКИ:

КЛАССИЧЕСКАЯ ГРАДУИРОВКА:
• Создание объема через слои
• Работа с длиной
• Формирование силуэта
• Техники филировки

ОБРАТНАЯ ГРАДУИРОВКА:
• Техника для создания внутреннего объема
• Работа с тяжелыми волосами
• Создание поддержки формы
• Контроль движения волос

СМЕШАННАЯ ГРАДУИРОВКА:
• Комбинирование различных углов
• Создание сложных форм
• Работа с переходами
• Индивидуальный подход

ИНСТРУМЕНТЫ И ТЕХНИКИ:
• Работа с филировочными ножницами
• Техника point cutting
• Слайсинг для создания текстуры
• Контроль натяжения волос`
    },
    {
      id: '2',
      title: 'Асимметричные стрижки',
      description: 'Создание современных асимметричных форм',
      content: `Асимметричные стрижки - искусство современного дизайна.

ПЛАНИРОВАНИЕ АСИММЕТРИИ:

АНАЛИЗ КЛИЕНТА:
• Анализ формы лица клиента
• Выбор подходящего типа асимметрии
• Создание схемы стрижки
• Определение ключевых точек

ТЕХНИКИ ВЫПОЛНЕНИЯ:

ДИАГОНАЛЬНЫЕ СРЕЗЫ:
• Создание динамичных линий
• Работа с углами
• Контроль направления
• Создание движения

ГЕОМЕТРИЧЕСКИЕ ФОРМЫ:
• Четкие углы и переходы
• Архитектурный подход
• Точность исполнения
• Современные тренды

МЯГКАЯ АСИММЕТРИЯ:
• Плавные неравномерные формы
• Естественные переходы
• Органичные линии
• Женственные силуэты

ОСОБЕННОСТИ РАБОТЫ:
• Точность измерений
• Контроль симметрии в асимметрии
• Работа с различными текстурами волос
• Адаптация под тип лица`
    },
    {
      id: '3',
      title: 'Текстурирование',
      description: 'Продвинутые техники создания текстуры',
      content: `Продвинутое текстурирование - мастерство создания различных текстур.

ВИДЫ ТЕКСТУРИРОВАНИЯ:

POINT CUTTING:
• Точечная стрижка
• Создание мягких краев
• Работа с кончиками
• Естественная текстура

SLIDE CUTTING:
• Скользящая стрижка
• Создание движения
• Работа с объемом
• Динамичные переходы

TWIST CUTTING:
• Стрижка с поворотом
• Создание спиралей
• Работа с кудрявыми волосами
• Естественные завитки

RAZOR CUTTING:
• Работа с бритвой
• Создание мягких переходов
• Филировка краев
• Естественная текстура

ТЕХНИКИ ДЛЯ РАЗНЫХ ТИПОВ ВОЛОС:

ТОНКИЕ ВОЛОСЫ:
• Создание объема через текстуру
• Поддержка формы
• Визуальное утолщение
• Легкость движения

ГУСТЫЕ ВОЛОСЫ:
• Прореживание и облегчение
• Контроль объема
• Создание подвижности
• Управление формой

КУДРЯВЫЕ ВОЛОСЫ:
• Работа с естественной текстурой
• Подчеркивание завитков
• Контроль пушистости
• Создание определенности

ИНСТРУМЕНТЫ ТЕКСТУРИРОВАНИЯ:
• Филировочные ножницы разных типов
• Бритва и техники ее использования
• Специальные ножницы для текстурирования
• Техники безопасности`
    }
  ]
}

export default function AdvancedCuttingPage() {
  return <CoursePageLayout course={courseData} />;
}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
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
                        <span className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${
                          selectedLesson?.id === lesson.id
                            ? 'text-blue-400'
                            : 'text-gray-300'
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
            {selectedLesson && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}