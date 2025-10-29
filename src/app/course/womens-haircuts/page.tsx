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
  id: 'womens-haircuts',
  title: 'Женские стрижки',
  description: 'Освойте искусство женских стрижек от классических до современных трендов. Изучите техники работы с разной длиной и текстурой волос.',
  lessons: [
    {
      id: '1',
      title: 'Основы женских стрижек',
      description: 'Базовые принципы и техники',
      content: `Женские стрижки - это искусство создания красоты и индивидуальности.

ОСНОВНЫЕ ПРИНЦИПЫ:

АНАЛИЗ КЛИЕНТА:
• Форма лица
• Тип волос
• Образ жизни
• Личные предпочтения

БАЗОВЫЕ ФОРМЫ СТРИЖЕК:

КАРЕ:
• Четкие геометрические линии
• Длина до подбородка
• Ровный срез
• Классический вид

БОБ:
• Градуированная форма
• Короче сзади, длиннее спереди
• Объем и движение
• Современный стиль

КАСКАД:
• Многослойная структура
• Плавные переходы
• Естественный объем
• Универсальность

ПИКСИ:
• Очень короткая стрижка
• Текстурированная
• Игривый образ
• Минимум укладки

ТЕХНИКИ СТРИЖКИ:

ТУПОЙ СРЕЗ:
• Ножницы перпендикулярно волосам
• Четкая линия
• Максимальная густота
• Геометрический вид

ГРАДУИРОВКА:
• Ножницы под углом
• Создание слоев
• Объем и движение
• Современный подход

ФИЛИРОВКА:
• Прореживание волос
• Смягчение линий
• Создание текстуры
• Естественный вид

POINT CUTTING:
• Точечная техника
• Создание текстуры
• Мягкие края
• Естественное движение

ИНСТРУМЕНТЫ:

НОЖНИЦЫ:
• Прямые для основного среза
• Филировочные для текстуры
• Размер 5.5-6.5 дюймов
• Острая заточка

РАСЧЕСКИ:
• Комбинированная
• Хвостик для проборов
• Широкая для распутывания
• Металлическая для точности

ЗАЖИМЫ:
• Для разделения зон
• Удержание волос
• Контроль процесса
• Удобство работы

ЭТАПЫ СТРИЖКИ:

1. КОНСУЛЬТАЦИЯ:
• Обсуждение желаний
• Анализ возможностей
• Выбор формы
• Согласование деталей

2. ПОДГОТОВКА:
• Мытье волос
• Легкое подсушивание
• Расчесывание
• Разделение на зоны

3. ОСНОВНАЯ СТРИЖКА:
• Создание базовой формы
• Контрольные пряди
• Симметричность
• Постепенность

4. ДЕТАЛИЗАЦИЯ:
• Коррекция формы
• Создание текстуры
• Окантовка
• Финальная проверка

5. УКЛАДКА:
• Сушка феном
• Создание объема
• Финальная форма
• Презентация результата

ОСОБЕННОСТИ ЖЕНСКИХ СТРИЖЕК:
• Больше вариативности
• Учет индивидуальности
• Сложные техники
• Творческий подход

Женская стрижка - это создание уникального образа!`
    },
    {
      id: '2',
      title: 'Работа с длинными волосами',
      description: 'Техники стрижки и оформления длинных волос',
      content: `Длинные волосы требуют особого подхода и мастерства.

ОСОБЕННОСТИ ДЛИННЫХ ВОЛОС:

ПРЕИМУЩЕСТВА:
• Множество вариантов укладки
• Возможность экспериментов
• Женственность
• Универсальность

СЛОЖНОСТИ:
• Больший вес волос
• Сложность в уходе
• Необходимость регулярной коррекции
• Требования к здоровью волос

ОСНОВНЫЕ ТЕХНИКИ:

ЛЕСЕНКА:
• Ступенчатая стрижка
• Плавные переходы
• Обрамление лица
• Легкость и движение

КАСКАД:
• Многослойная структура
• Объем по всей длине
• Естественное движение
• Подходит всем типам волос

ГРАДУИРОВКА:
• Создание слоев
• Убирание веса
• Добавление объема
• Современный вид

ФИЛИРОВКА:
• Прореживание кончиков
• Создание текстуры
• Легкость волос
• Естественный вид

ТЕХНИКА ВЫПОЛНЕНИЯ ЛЕСЕНКИ:

1. ПОДГОТОВКА:
• Влажные чистые волосы
• Разделение на зоны
• Определение длины
• Создание контрольной пряди

2. ОСНОВНАЯ РАБОТА:
• Стрижка от лица
• Постепенное удлинение
• Плавные переходы
• Контроль симметрии

3. ДЕТАЛИЗАЦИЯ:
• Коррекция переходов
• Филировка кончиков
• Обрамление лица
• Финальная проверка

ТЕХНИКА КАСКАДА:

1. РАЗДЕЛЕНИЕ:
• Горизонтальные проборы
• Создание уровней
• Определение длины слоев
• Контрольные пряди

2. СТРИЖКА СЛОЕВ:
• От коротких к длинным
• Плавные переходы
• Сохранение общей длины
• Создание объема

3. СОЕДИНЕНИЕ:
• Плавные переходы
• Убирание резких линий
• Создание целостности
• Естественный вид

РАБОТА С ПРОБЛЕМНЫМИ ЗОНАМИ:

ТОНКИЕ ВОЛОСЫ:
• Минимальная филировка
• Сохранение густоты
• Создание иллюзии объема
• Правильная техника

ГУСТЫЕ ВОЛОСЫ:
• Активная градуировка
• Снятие веса
• Создание легкости
• Контроль объема

ПРЯМЫЕ ВОЛОСЫ:
• Четкие слои
• Геометрическая точность
• Контроль линий
• Аккуратность

ВЬЮЩИЕСЯ ВОЛОСЫ:
• Работа с текстурой
• Учет завитков
• Индивидуальный подход
• Сохранение естественности

ОШИБКИ В ГРАДУИРОВКЕ:
• Слишком резкие переходы
• Неправильный угол среза
• Асимметрия
• Потеря общей формы

КОРРЕКЦИЯ ОШИБОК:
• Дополнительная филировка
• Создание плавности
• Балансировка формы
• Терпение и мастерство

Градуировка - это скульптура из волос!`
    },
    {
      id: '5',
      title: 'Челки и обрамление лица',
      description: 'Создание идеального обрамления лица',
      content: `Челка - важнейший элемент женской стрижки, способный кардинально изменить образ.

ВИДЫ ЧЕЛОК:

ПРЯМАЯ ЧЕЛКА:
• Ровный горизонтальный срез
• Четкие геометрические линии
• Классический стиль
• Подходит овальному лицу

КОСАЯ ЧЕЛКА:
• Диагональный срез
• Асимметрия
• Современный вид
• Универсальность

РВАНАЯ ЧЕЛКА:
• Неровные края
• Текстурированная
• Молодежный стиль
• Естественность

УДЛИНЕННАЯ ЧЕЛКА:
• Длина до бровей и ниже
• Возможность укладки
• Элегантность
• Универсальность

ГРАДУИРОВАННАЯ ЧЕЛКА:
• Слоистая структура
• Объем и движение
• Мягкость линий
• Естественный вид

ТЕХНИКА СТРИЖКИ ЧЕЛКИ:

ПОДГОТОВКА:
1. Определение формы лица
2. Выбор типа челки
3. Разметка зоны
4. Создание треугольного пробора

СТРИЖКА ПРЯМОЙ ЧЕЛКИ:
1. Натяжение волос вниз
2. Ровный горизонтальный срез
3. Контроль симметрии
4. Финальная коррекция

СТРИЖКА КОСОЙ ЧЕЛКИ:
1. Определение угла наклона
2. Диагональный срез
3. Плавный переход
4. Адаптация под лицо

СОЗДАНИЕ РВАНОЙ ЧЕЛКИ:
1. Базовый срез
2. Point cutting техника
3. Создание неровности
4. Естественная текстура

АДАПТАЦИЯ ПОД ФОРМУ ЛИЦА:

ОВАЛЬНОЕ ЛИЦО:
• Любые виды челок
• Эксперименты с длиной
• Акцент на глаза
• Универсальность

КРУГЛОЕ ЛИЦО:
• Косая удлиненная челка
• Избегание прямых линий
• Визуальное вытягивание
• Асимметрия

КВАДРАТНОЕ ЛИЦО:
• Мягкие рваные челки
• Избегание четких линий
• Смягчение углов
• Естественность

ТРЕУГОЛЬНОЕ ЛИЦО:
• Прямая густая челка
• Акцент на верхнюю часть
• Балансировка пропорций
• Гармония

СЕРДЦЕВИДНОЕ ЛИЦО:
• Редкая удлиненная челка
• Мягкие линии
• Не перегружать верх
• Деликатность

ОБРАМЛЕНИЕ ЛИЦА:

ПРИНЦИПЫ:
• Подчеркивание достоинств
• Скрытие недостатков
• Гармония с общей формой
• Индивидуальный подход

ТЕХНИКИ:
• Градуированные пряди у лица
• Слоистое обрамление
• Мягкие переходы
• Естественное движение

ДЛИННЫЕ ПРЯДИ У ЛИЦА:
• Визуальное вытягивание
• Элегантность
• Женственность
• Универсальность

КОРОТКИЕ ПРЯДИ У ЛИЦА:
• Акцент на скулы
• Молодежный вид
• Динамичность
• Современность

УХОД ЗА ЧЕЛКОЙ:

ЕЖЕДНЕВНЫЙ:
• Мытье по необходимости
• Правильная сушка
• Укладка
• Защита от влаги

КОРРЕКЦИЯ:
• Каждые 2-3 недели
• Поддержание формы
• Удаление отросших волос
• Сохранение стиля

УКЛАДКА ЧЕЛКИ:

ПРЯМАЯ УКЛАДКА:
• Сушка феном вниз
• Использование брашинга
• Фиксация лаком
• Четкие линии

ОБЪЕМНАЯ УКЛАДКА:
• Приподнимание у корней
• Создание пышности
• Естественное движение
• Легкость

БОКОВАЯ УКЛАДКА:
• Зачесывание в сторону
• Создание волны
• Романтичность
• Элегантность

Челка - это рама для лица, она должна быть идеальной!`
    }
  ]
}

export default function WomensHaircutsPage() {
  const router = useRouter()
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [activeTab, setActiveTab] = useState<'lessons' | 'favorites' | 'archive'>('lessons')
  const [favorites, setFavorites] = useState<string[]>([])
  const [archived, setArchived] = useState<string[]>([])

  const toggleFavorite = (lessonId: string) => {
    setFavorites(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const toggleArchive = (lessonId: string) => {
    setArchived(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const getFilteredLessons = () => {
    switch (activeTab) {
      case 'favorites':
        return courseData.lessons.filter(lesson => favorites.includes(lesson.id))
      case 'archive':
        return courseData.lessons.filter(lesson => archived.includes(lesson.id))
      default:
        return courseData.lessons.filter(lesson => !archived.includes(lesson.id))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-gray-300 hover:text-white transition-colors mb-4"
          >
            ← Назад к курсам
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {courseData.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {courseData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lessons List */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              {/* Tabs */}
              <div className="flex space-x-1 mb-4 bg-white/5 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'lessons'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Уроки ({courseData.lessons.filter(lesson => !archived.includes(lesson.id)).length})
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'favorites'
                      ? 'bg-yellow-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  ⭐ Избранное ({favorites.length})
                </button>
                <button
                  onClick={() => setActiveTab('archive')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'archive'
                      ? 'bg-gray-500 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  📁 Архив ({archived.length})
                </button>
              </div>

              <div className="space-y-2">
                {getFilteredLessons().map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`w-full p-3 rounded-lg transition-all duration-200 cursor-pointer ${
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
                      <div 
                        className="flex-1 cursor-pointer"
                        onClick={() => setSelectedLesson(lesson)}
                      >
                        <h3 className="text-white font-medium text-sm">
                          {lesson.title}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(lesson.id)
                          }}
                          className={`p-1 rounded transition-colors ${
                            favorites.includes(lesson.id)
                              ? 'text-yellow-400 hover:text-yellow-300'
                              : 'text-gray-500 hover:text-yellow-400'
                          }`}
                          title={favorites.includes(lesson.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                        >
                          ⭐
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleArchive(lesson.id)
                          }}
                          className={`p-1 rounded transition-colors ${
                            archived.includes(lesson.id)
                              ? 'text-gray-400 hover:text-gray-300'
                              : 'text-gray-500 hover:text-gray-400'
                          }`}
                          title={archived.includes(lesson.id) ? 'Убрать из архива' : 'Добавить в архив'}
                        >
                          📁
                        </button>
                      </div>
                    </div>
                  </div>
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