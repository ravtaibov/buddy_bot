'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function BarberFromScratchPage() {
  return (
    <LessonLayout 
      title="Барбер с нуля"
      description="Полный курс обучения барберингу для начинающих мастеров"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Основы барберинга</h3>
          <p className="text-gray-600 text-sm">Введение в профессию барбера, инструменты и оборудование</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Техники стрижки</h3>
          <p className="text-gray-600 text-sm">Основные техники мужской стрижки</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Работа с машинкой</h3>
          <p className="text-gray-600 text-sm">Техники работы с машинкой для стрижки</p>
        </div>
      </div>
    </LessonLayout>
  )
}