'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function ModernHaircutsFadePage() {
  return (
    <LessonLayout 
      title="Современные стрижки + переход fade"
      description="Актуальные тренды в мужских стрижках с fade переходами"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Трендовые стрижки</h3>
          <p className="text-gray-600 text-sm">Изучение современных трендов в мужских стрижках</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Комбинирование техник</h3>
          <p className="text-gray-600 text-sm">Сочетание классических и современных техник</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Fade в современных стрижках</h3>
          <p className="text-gray-600 text-sm">Интеграция fade переходов в модные стрижки</p>
        </div>
      </div>
    </LessonLayout>
  )
}