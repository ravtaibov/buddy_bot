'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function FadeTechniquePage() {
  return (
    <LessonLayout 
      title="Практика техники «FADE»"
      description="Продвинутый курс по технике fade для опытных мастеров"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Виды fade переходов</h3>
          <p className="text-gray-600 text-sm">Изучение различных типов fade переходов</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Техника выполнения</h3>
          <p className="text-gray-600 text-sm">Пошаговая техника создания идеального fade</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Сложные переходы</h3>
          <p className="text-gray-600 text-sm">Работа со сложными fade переходами</p>
        </div>
      </div>
    </LessonLayout>
  )
}