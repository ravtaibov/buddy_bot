'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courseData = {
  title: "Работа с проблемными волосами",
  description: "Специализированный курс по работе с различными типами проблемных волос",
  lessons: [
    {
      id: "1",
      title: "Диагностика проблем волос",
      description: "Определение типов проблем и их причин",
      content: `Диагностика проблем волос

Научитесь правильно определять проблемы волос и их первопричины.

Основные типы проблем:
• Поврежденные волосы (химическое воздействие)
• Сухие и ломкие волосы
• Жирные волосы у корней
• Тонкие и редкие волосы
• Непослушные и пушащиеся волосы

Методы диагностики:
1. Визуальный осмотр: Оценка состояния волос и кожи головы
2. Тактильная диагностика: Определение структуры и эластичности
3. Тест на пористость: Проверка способности волос впитывать влагу

Анамнез клиента:
• История химических процедур
• Используемые средства ухода
• Образ жизни и питание
• Гормональные изменения`
    },
    {
      id: "2",
      title: "Техники для поврежденных волос",
      description: "Специальные приемы работы с поврежденными волосами",
      content: `Техники для поврежденных волос

Изучение безопасных техник стрижки поврежденных волос.

Принципы работы:
• Минимизация механического воздействия
• Использование острых инструментов
• Техники "горячих ножниц"
• Поэтапное восстановление длины

Специальные техники:
1. Dusting: Удаление только поврежденных кончиков
2. Search and destroy: Точечное удаление секущихся волос
3. Protective cutting: Стрижка с сохранением длины

Рекомендации по уходу:
• Протеиновые маски для восстановления
• Увлажняющие процедуры
• Защита от термического воздействия
• Регулярная коррекция кончиков`
    },
    {
      id: "3",
      title: "Работа с тонкими волосами",
      description: "Создание объема и плотности для тонких волос",
      content: `Работа с тонкими волосами

Техники создания визуального объема и плотности.

Стратегии создания объема:
• Многослойные стрижки
• Текстурирование для плотности
• Правильная длина для типа волос
• Техники укладки для объема

Техники стрижки:
1. Градуированный боб: Классика для тонких волос
2. Лесенка: Создание движения и объема
3. Пикси с текстурой: Максимальный объем на коротких волосах

Что избегать:
• Слишком сильное филирование
• Очень длинные волосы
• Тяжелые прямые срезы
• Агрессивное текстурирование

Средства для укладки:
• Муссы для объема
• Текстурирующие спреи
• Сухие шампуни
• Легкие фиксирующие средства`
    },
    {
      id: "4",
      title: "Кудрявые и непослушные волосы",
      description: "Техники работы с кудрявыми и непослушными волосами",
      content: `Кудрявые и непослушные волосы

Специальные подходы к стрижке кудрявых волос.

Понимание структуры кудрей:
• Типы кудрей (2A-4C)
• Пористость кудрявых волос
• Естественные паттерны роста
• Усадка при высыхании

Техники стрижки кудрей:
1. Стрижка на сухие волосы: Видение естественной формы
2. Curly cutting: Стрижка каждого завитка отдельно
3. DevaCut: Специализированная техника для кудрей

Принципы работы:
• Не растягивать волосы при стрижке
• Работать с естественным паттерном
• Создавать форму, а не бороться с ней
• Учитывать усадку волос

Уход за кудрями:
• Метод "co-washing"
• Техники нанесения средств
• Сушка диффузором
• Защита во время сна`
    }
  ]
};

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function ProblemHairPage() {
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