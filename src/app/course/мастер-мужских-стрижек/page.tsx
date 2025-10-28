'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function MenHaircutMasterPage() {
  return (
    <LessonLayout 
      title="Мастер мужских стрижек"
      description="Профессиональный курс по мужским стрижкам для начинающих"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Классические стрижки</h3>
          <p className="text-gray-600 text-sm">Изучение классических мужских стрижек</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Современные тренды</h3>
          <p className="text-gray-600 text-sm">Актуальные тенденции в мужских стрижках</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Техника выполнения</h3>
          <p className="text-gray-600 text-sm">Пошаговое выполнение различных стрижек</p>
        </div>
      </div>
    </LessonLayout>
  )
}