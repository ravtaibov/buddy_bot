'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CoursePageLayout } from '@/components/ui/course-page-layout'

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

  return <CoursePageLayout course={courseData} />;

}