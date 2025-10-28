'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function AdvancedColoringPage() {
  return (
    <LessonLayout 
      title="Сложные техники окрашивания"
      description="Продвинутый курс по сложным техникам окрашивания волос"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Многотональное окрашивание</h3>
          <p className="text-gray-600 text-sm">Техники создания сложных цветовых переходов</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Креативное окрашивание</h3>
          <p className="text-gray-600 text-sm">Нестандартные техники и цветовые решения</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Коррекция сложных окрашиваний</h3>
          <p className="text-gray-600 text-sm">Исправление неудачных окрашиваний</p>
        </div>
      </div>
    </LessonLayout>
  )
}