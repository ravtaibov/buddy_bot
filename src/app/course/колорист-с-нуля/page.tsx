'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function ColoristFromScratchPage() {
  return (
    <LessonLayout 
      title="Колорист с нуля"
      description="Полный курс обучения колористике для начинающих мастеров"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Основы колористики</h3>
          <p className="text-gray-600 text-sm">Теория цвета и основы окрашивания волос</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Техники окрашивания</h3>
          <p className="text-gray-600 text-sm">Различные техники и методы окрашивания</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Работа с красителями</h3>
          <p className="text-gray-600 text-sm">Выбор и применение профессиональных красителей</p>
        </div>
      </div>
    </LessonLayout>
  )
}