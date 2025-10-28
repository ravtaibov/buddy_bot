'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function MensPermanentWavePage() {
  return (
    <LessonLayout 
      title="Мужская завивка волос"
      description="Профессиональный курс по мужской завивке и химической обработке волос"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Типы завивки</h3>
          <p className="text-gray-600 text-sm">Изучение различных типов мужской завивки</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Химические составы</h3>
          <p className="text-gray-600 text-sm">Работа с химическими составами для завивки</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Техника выполнения</h3>
          <p className="text-gray-600 text-sm">Пошаговая техника мужской завивки</p>
        </div>
      </div>
    </LessonLayout>
  )
}