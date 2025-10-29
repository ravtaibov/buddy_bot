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
  id: 'mens-haircuts',
  title: 'Мужские стрижки',
  description: 'Изучите классические и современные техники мужских стрижек. От базовых навыков до продвинутых методов.',
  lessons: [
    {
      id: '1',
      title: 'Классические мужские стрижки',
      description: 'Основы традиционных мужских стрижек',
      content: `Классические мужские стрижки - основа барберского мастерства.

ОСНОВНЫЕ ВИДЫ КЛАССИЧЕСКИХ СТРИЖЕК:

ПОЛУБОКС:
• Короткие виски и затылок (3-6 мм)
• Плавный переход к макушке
• Длина сверху 2-4 см
• Четкая окантовка

БОКС:
• Очень короткие виски и затылок (1-3 мм)
• Резкий переход к макушке
• Длина сверху 1-2 см
• Спортивный вид

КАНАДКА:
• Удлиненная челка
• Короткие виски
• Объем на макушке
• Возможность укладки

БРИТАНКА:
• Короткие бока
• Длинная макушка
• Боковой пробор
• Элегантный вид

ТЕХНИКА ВЫПОЛНЕНИЯ:

1. ПОДГОТОВКА:
• Мытье и расчесывание волос
• Определение формы головы
• Выбор подходящей стрижки
• Подготовка инструментов

2. ОСНОВНАЯ СТРИЖКА:
• Начинаем с затылочной зоны
• Работаем машинкой снизу вверх
• Создаем базовую форму
• Переходим к височным зонам

3. СОЗДАНИЕ ПЕРЕХОДОВ:
• Используем разные насадки
• Плавные движения машинкой
• Растушевка ножницами
• Проверка симметрии

4. РАБОТА С МАКУШКОЙ:
• Стрижка ножницами
• Создание нужной длины
• Филировка при необходимости
• Формирование силуэта

5. ОКАНТОВКА:
• Четкие линии роста волос
• Обработка висков
• Окантовка на шее
• Финальная проверка

ОСОБЕННОСТИ КЛАССИЧЕСКИХ СТРИЖЕК:
• Строгие геометрические формы
• Четкие переходы
• Минимальная укладка
• Универсальность
• Долговечность формы

Классические стрижки никогда не выходят из моды!`
    },
    {
      id: '2',
      title: 'Современные техники fade',
      description: 'Изучение техники плавных переходов',
      content: `Техника fade - основа современного барберинга.

ВИДЫ FADE:

LOW FADE (НИЗКИЙ):
• Переход начинается низко
• Плавная растушевка
• Сохраняется больше волос
• Консервативный вид

MID FADE (СРЕДНИЙ):
• Переход на уровне висков
• Сбалансированный вид
• Универсальный вариант
• Подходит большинству

HIGH FADE (ВЫСОКИЙ):
• Переход начинается высоко
• Контрастный эффект
• Современный стиль
• Требует частой коррекции

SKIN FADE (ДО КОЖИ):
• Переход до полного сбривания
• Максимальный контраст
• Требует мастерства
• Эффектный результат

ТЕХНИКА ВЫПОЛНЕНИЯ FADE:

1. ПОДГОТОВКА:
• Определение типа fade
• Выбор начальной длины
• Разметка зон перехода
• Подготовка насадок

2. СОЗДАНИЕ БАЗЫ:
• Стрижка основной длины
• Определение линии fade
• Создание контрольной точки
• Проверка симметрии

3. СОЗДАНИЕ ПЕРЕХОДА:
• Работа с разными насадками
• Плавные движения
• Постепенное уменьшение длины
• Растушевка переходов

4. ДЕТАЛИЗАЦИЯ:
• Работа триммером
• Создание четких линий
• Удаление лишних волос
• Финальная проверка

ИНСТРУМЕНТЫ ДЛЯ FADE:
• Машинка с регулировкой
• Набор насадок (0.5-12 мм)
• Триммер для детализации
• Расческа для проверки

СЕКРЕТЫ КАЧЕСТВЕННОГО FADE:
• Плавные движения машинкой
• Постоянная проверка результата
• Работа против роста волос
• Терпение и практика

РАСПРОСТРАНЕННЫЕ ОШИБКИ:
• Слишком резкие переходы
• Неровная линия fade
• Асимметрия
• Неправильный угол машинки

Fade - это искусство, требующее постоянной практики!`
    },
    {
      id: '3',
      title: 'Работа с текстурой волос',
      description: 'Техники работы с разными типами волос',
      content: `Понимание текстуры волос - ключ к идеальной стрижке.

ТИПЫ ТЕКСТУРЫ ВОЛОС:

ПРЯМЫЕ ВОЛОСЫ:
• Легко стригутся
• Четкие линии
• Видны все неровности
• Требуют точности

ВОЛНИСТЫЕ ВОЛОСЫ:
• Естественный объем
• Скрывают мелкие недочеты
• Требуют особого подхода
• Хорошо держат форму

КУДРЯВЫЕ ВОЛОСЫ:
• Сложны в работе
• Непредсказуемое поведение
• Требуют специальных техник
• Уникальные возможности

ЖЕСТКИЕ ВОЛОСЫ:
• Трудно укладываются
• Быстро отрастают
• Требуют частой коррекции
• Держат четкую форму

МЯГКИЕ ВОЛОСЫ:
• Легко укладываются
• Быстро теряют форму
• Требуют поддержки объема
• Деликатная работа

ТЕХНИКИ РАБОТЫ:

ДЛЯ ПРЯМЫХ ВОЛОС:
• Точные геометрические формы
• Четкие линии среза
• Минимальная филировка
• Аккуратная окантовка

ДЛЯ ВОЛНИСТЫХ ВОЛОС:
• Работа с естественной текстурой
• Слоистые стрижки
• Филировка для контроля объема
• Учет направления завитка

ДЛЯ КУДРЯВЫХ ВОЛОС:
• Стрижка на сухие волосы
• Работа с каждым завитком
• Избегание прореживания
• Сохранение естественной формы

СПЕЦИАЛЬНЫЕ ТЕХНИКИ:

POINT CUTTING:
• Точечная стрижка
• Создание текстуры
• Смягчение линий
• Естественный вид

SLIDE CUTTING:
• Скользящий срез
• Удаление веса
• Создание движения
• Современный подход

TWIST CUTTING:
• Скручивание прядей
• Создание текстуры
• Индивидуальный подход
• Уникальный результат

РАБОТА С ПРОБЛЕМНЫМИ ЗОНАМИ:

ДВОЙНЫЕ МАКУШКИ:
• Учет направления роста
• Компенсация стрижкой
• Специальная укладка
• Индивидуальный подход

РЕДКИЕ ВОЛОСЫ:
• Создание иллюзии густоты
• Правильная длина
• Избегание прореживания
• Объемные техники

ЖЕСТКИЕ ВОЛОСЫ:
• Контроль направления
• Правильная длина
• Использование продуктов
• Регулярная коррекция

Каждый тип волос требует индивидуального подхода!`
    },
    {
      id: '4',
      title: 'Создание узоров и рисунков',
      description: 'Художественные элементы в мужских стрижках',
      content: `Создание узоров - высший пилотаж барберского искусства.

ОСНОВЫ СОЗДАНИЯ УЗОРОВ:

ИНСТРУМЕНТЫ:
• Триммер с тонкими лезвиями
• Машинка с насадкой 0
• Опасная бритва
• Трафареты (для начинающих)

БАЗОВЫЕ ЭЛЕМЕНТЫ:
• Прямые линии
• Изогнутые линии
• Геометрические фигуры
• Орнаменты

ПОПУЛЯРНЫЕ УЗОРЫ:

ЛИНИИ:
• Простые прямые линии
• Параллельные полосы
• Зигзаги
• Волнистые линии

ГЕОМЕТРИЯ:
• Треугольники
• Ромбы
• Звезды
• Абстрактные фигуры

СИМВОЛЫ:
• Логотипы
• Буквы
• Цифры
• Знаки

ТЕХНИКА ВЫПОЛНЕНИЯ:

1. ПЛАНИРОВАНИЕ:
• Выбор дизайна
• Определение размера
• Разметка области
• Подготовка инструментов

2. СОЗДАНИЕ КОНТУРА:
• Точные движения
• Четкие линии
• Проверка симметрии
• Постепенное углубление

3. ДЕТАЛИЗАЦИЯ:
• Проработка деталей
• Создание глубины
• Удаление лишних волос
• Финальная коррекция

СЛОЖНЫЕ ТЕХНИКИ:

3D ЭФФЕКТЫ:
• Игра света и тени
• Многоуровневые переходы
• Объемные элементы
• Реалистичные изображения

ПОРТРЕТЫ:
• Высокий уровень мастерства
• Точная детализация
• Понимание пропорций
• Художественные навыки

ЛОГОТИПЫ:
• Точное воспроизведение
• Четкие контуры
• Правильные пропорции
• Узнаваемость

УХОД ЗА УЗОРАМИ:
• Регулярная коррекция
• Использование специальных средств
• Защита от выгорания
• Поддержание четкости

СОВЕТЫ ДЛЯ НАЧИНАЮЩИХ:
• Начинайте с простых узоров
• Используйте трафареты
• Практикуйтесь на манекенах
• Изучайте работы мастеров

КОММЕРЧЕСКИЙ АСПЕКТ:
• Дополнительная услуга
• Повышение стоимости
• Привлечение клиентов
• Развитие бренда

Узоры - это способ выразить творчество и мастерство!`
    },
    {
      id: '5',
      title: 'Укладка и стайлинг',
      description: 'Завершающие штрихи мужской стрижки',
      content: `Правильная укладка - завершение идеальной стрижки.

ОСНОВЫ УКЛАДКИ:

ТИПЫ УКЛАДОК:
• Классическая с пробором
• Зачесанная назад
• Текстурированная
• Небрежная

ИНСТРУМЕНТЫ ДЛЯ УКЛАДКИ:
• Фен
• Расчески разных размеров
• Брашинги
• Щетки

ПРОДУКТЫ ДЛЯ СТАЙЛИНГА:

ПОМАДЫ:
• Сильная фиксация
• Глянцевый блеск
• Классический вид
• Легко смываются

ВОСКИ:
• Средняя фиксация
• Матовый финиш
• Естественный вид
• Подвижность

ГЕЛИ:
• Сильная фиксация
• Мокрый эффект
• Четкие линии
• Долговечность

ПАСТЫ:
• Гибкая фиксация
• Текстурированный вид
• Современный стиль
• Переукладка

ТЕХНИКИ УКЛАДКИ:

КЛАССИЧЕСКАЯ С ПРОБОРОМ:
1. Нанесение помады на влажные волосы
2. Создание четкого пробора
3. Зачесывание в сторону
4. Фиксация лаком

ЗАЧЕСАННАЯ НАЗАД:
1. Нанесение геля на влажные волосы
2. Зачесывание назад расческой
3. Сушка феном
4. Финальная фиксация

ТЕКСТУРИРОВАННАЯ:
1. Нанесение пасты на сухие волосы
2. Взбивание руками
3. Создание хаотичной текстуры
4. Легкая фиксация

НЕБРЕЖНАЯ:
1. Минимум продукта
2. Естественная сушка
3. Легкое взбивание
4. Натуральный вид

ПОДБОР УКЛАДКИ:

ПО ТИПУ ЛИЦА:
• Овальное - любые укладки
• Круглое - объем сверху
• Квадратное - мягкие линии
• Треугольное - объем по бокам

ПО ТИПУ ВОЛОС:
• Прямые - четкие формы
• Волнистые - естественные текстуры
• Кудрявые - контроль объема
• Тонкие - создание густоты

ПО ОБРАЗУ ЖИЗНИ:
• Деловой стиль - классические укладки
• Спортивный - минимум продуктов
• Творческий - эксперименты
• Повседневный - простота

СОВЕТЫ ПО УКЛАДКЕ:
• Меньше продукта - лучше результат
• Работайте с влажными волосами
• Учитывайте направление роста
• Практикуйте разные техники

ОБУЧЕНИЕ КЛИЕНТА:
• Покажите технику укладки
• Порекомендуйте продукты
• Дайте советы по уходу
• Назначьте следующий визит

Хорошая укладка продлевает жизнь стрижки!`
    }
  ]
}

export default function MensHaircutsPage() {
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
                      <div className="flex-1">
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