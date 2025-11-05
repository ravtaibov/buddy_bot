'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courseData = {
  title: "Авторские техники",
  description: "Эксклюзивные авторские методики и инновационные подходы к стрижке",
  lessons: [
    {
      id: "1",
      title: "Разработка собственного стиля",
      description: "Создание уникального авторского подхода",
      content: `Научитесь создавать свой уникальный стиль и авторские техники.

Основы авторского стиля:
• Анализ собственных сильных сторон
• Изучение мировых трендов
• Адаптация техник под свой стиль
• Создание узнаваемого почерка

Этапы развития стиля:
1. Изучение основ - освоение классических техник
2. Экспериментирование - поиск новых подходов
3. Систематизация - создание собственной методики
4. Совершенствование - постоянное развитие техник

Источники вдохновения:
• Архитектура и дизайн
• Природные формы
• Модные тенденции
• Культурные особенности
• Индивидуальность клиента

Документирование процесса:
• Ведение портфолио работ
• Описание техник и подходов
• Фотофиксация этапов работы
• Анализ результатов`
    },
    {
      id: "2",
      title: "Инновационные техники стрижки",
      description: "Современные авторские методики",
      content: `Изучение и создание новых техник стрижки.

Современные авторские техники:
• Invisible layering - невидимые слои
• Floating sections - плавающие секции
• Tension variation - варьирование натяжения
• Angle shifting - смещение углов

Техники создания объема:
1. Internal layering - внутренние слои для объема
2. Root lifting cuts - стрижки для подъема у корней
3. Disconnected layers - разъединенные слои

Работа с формой:
• Создание нестандартных силуэтов
• Игра с пропорциями
• Асимметричные решения
• Геометрические формы

Инструменты и приспособления:
• Нестандартное использование обычных инструментов
• Специализированные ножницы
• Авторские приспособления
• Комбинирование техник`
    },
    {
      id: "3",
      title: "Персонализация стрижек",
      description: "Индивидуальный подход к каждому клиенту",
      content: `Создание уникальных стрижек под каждого клиента.

Анализ клиента:
• Форма лица и особенности черт
• Тип и структура волос
• Образ жизни и профессия
• Личные предпочтения
• Время на укладку

Создание концепции:
1. Консультация - глубокое понимание потребностей
2. Визуализация - создание образа будущей стрижки
3. Адаптация - подгонка техник под особенности
4. Реализация - воплощение концепции

Техники персонализации:
• Коррекция формы лица
• Работа с проблемными зонами
• Создание индивидуального силуэта
• Учет особенностей роста волос

Психология работы с клиентом:
• Установление доверия
• Понимание ожиданий
• Управление процессом изменений
• Обучение уходу и укладке`
    },
    {
      id: "4",
      title: "Создание коллекций",
      description: "Разработка авторских коллекций стрижек",
      content: `Процесс создания целостных коллекций авторских стрижек.

Концепция коллекции:
• Выбор темы и идеи
• Определение целевой аудитории
• Создание мудборда
• Разработка цветовой палитры

Этапы создания:
1. Исследование - изучение трендов и вдохновения
2. Эскизирование - создание набросков идей
3. Прототипирование - тестирование на моделях
4. Финализация - доведение до совершенства

Техническое исполнение:
• Единство стиля в коллекции
• Вариативность для разных типов
• Инновационные элементы
• Практичность и носкость

Презентация коллекции:
• Профессиональная фотосъемка
• Создание лукбука
• Подготовка к показам
• Продвижение в социальных сетях

Коммерциализация:
• Адаптация для салонной работы
• Обучение других мастеров
• Создание обучающих материалов
• Защита авторских прав`
    }
  ]
};

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
}

export default function SignatureTechniquesPage() {
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
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                        : 'bg-gray-500/20 text-gray-300 border border-gray-500/30 hover:bg-gray-500/30'
                    }`}
                  >
                    {archived.has(selectedLesson.id) ? 'Восстановить' : 'В архив'}
                  </button>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <div className="text-gray-200 whitespace-pre-line leading-relaxed">
                    {selectedLesson.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}